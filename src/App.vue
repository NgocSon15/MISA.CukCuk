<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <Content/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Content from '@/components/layout/Content.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Content
  }
}
</script>

<style>
  #app {
    margin: 0px;
    font-family: GoogleSans-Regular;
    font-size: 13px;
  }

  @font-face {
      font-family: 'GoogleSans-Regular';
      src: url('assets/font/GoogleSans-Regular.otf') format('opentype');
  }
  @font-face {
      font-family: 'GoogleSans-Bold';
      src: url('assets/font/GoogleSans-Bold.otf') format('opentype');
  }
  @font-face {
      font-family: 'GoogleSans-Italic';
      src: url('assets/font/GoogleSans-Italic.otf') format('opentype');
  }

  .text-align-center{
      text-align: center;
  }

  .text-align-right{
      text-align: right;
  }

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #bbbbbb;
  }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #808080;
    }

  ::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #e9ebee;
  }

    ::-webkit-scrollbar-track:hover {
      background-color: #e5e5e5;
    }
</style>
