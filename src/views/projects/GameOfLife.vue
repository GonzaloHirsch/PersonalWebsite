<template>
  <v-container style="margin-top: 70px" class="mb-4">
    <v-row justify='center' align='center' class="mt-4 mb-1">
      <h1 class="text-primary light-text">{{ $t('projects.gol.title')}}</h1>
    </v-row>
    <v-col>
      <v-row justify='center' align='center'>
        <span v-html="$t('projects.gol.explain')"/>
      </v-row>
      <v-row justify='center' align='center' class="mt-2">
        <span>{{$t('projects.gol.instructions1')}}</span>
      </v-row>
      <v-row justify='center' align='center' class="mt-2">
        <span>{{$t('projects.gol.instructions2')}}</span>
      </v-row>
      <v-row justify='center' align='center' class="mt-2">
        <span>{{$t('projects.gol.instructions3')}}</span>
      </v-row>
    </v-col>
    <v-row justify='center' align='center' class="mt-1 mb-4">
      <v-btn
      class="mx-2 color-btn-permanent"
      fab
      dark
      small
      @click="updateRunning"
    >
      <v-icon v-if="!isRunning" large dark>mdi-play</v-icon>
      <v-icon v-else large dark>mdi-pause</v-icon>
    </v-btn>
    <v-btn
      class="mx-2 color-btn-permanent"
      fab
      dark
      small
      @click="clearBoard"
    >
      <v-icon large dark>mdi-stop</v-icon>
    </v-btn>
    </v-row>
    <v-row v-for="(row, rowIdx) in board" :key="rowIdx" justify="center" no-gutters>
      <template v-for="(col , colIdx) in row">
          <v-col :key="colIdx">
            <v-card
              v-bind:class="[{'alive': col == 1 && !hover, 'dead': col == 0 && !hover}, 'grid-cell', 'flex-center']"
              elevation="6"
              dark
              outlined
              @click="updateState(rowIdx, colIdx, col)"
              :disabled="isRunning"
            >
            </v-card>
          </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { DIMENSIONS, createBoard, runStep } from '@/assets/js/gameOfLife/gameOfLife.js'
import Vue from 'vue'

export default {
  name: 'GameOfLife',
  data: () => ({
    board: [],
    isRunning: false,
    timer: ''
  }),
  watch: {
    screenSize: function () {
      this.initBoard()
    }
  },
  computed: {
    screenSize: function () {
      return this.$vuetify.breakpoint.name
    }
  },
  methods: {
    updateState: function (i, j) {
      Vue.set(this.board[i], j, 1 - this.board[i][j])
      Vue.set(this.board, i, this.board[i])
    },
    updateRunning: function () {
      this.isRunning = !this.isRunning
      // Now it is running
      if (this.isRunning) {
        this.runGameStep()
        this.timer = setInterval(this.runGameStep, 300)
      } else {
        this.stopRunning()
      }
    },
    runGameStep: function () {
      this.board = runStep(this.board)
    },
    stopRunning: function () { clearInterval(this.timer) },
    clearBoard: function () {
      // Stop if running
      if (this.isRunning) {
        this.updateRunning()
      }
      this.initBoard()
    },
    initBoard: function () {
      if (this.isRunning) {
        this.updateRunning()
      }
      const size = this.$vuetify.breakpoint.name
      this.board = createBoard(DIMENSIONS[size].rows, DIMENSIONS[size].cols)
    }
  },
  mounted () {
    // Make the header more visible
    this.$store.dispatch('changeGreetingVisibility', false)
    this.initBoard()
  }
}
</script>

<style lang="scss" scoped>
.grid-cell {
  height: 2rem;
  width: 2rem;
}
.flag-icon {
  height: 1.5rem;
  widows: 1.5rem;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.col {
  flex-grow: 0;
}

.grid-cell:hover {
  cursor: pointer;
  background-color: rgba(68, 68, 68, 0.5) !important;
}

@mixin background-color($alive: false) {
  @if $alive {
    background-color: #a73f85 !important;
  } @else {
    background-color: rgb(68, 68, 68) !important;
  }
}

.alive {
  @include background-color($alive: true);
}

.dead {
  @include background-color($alive: false);
}
</style>
