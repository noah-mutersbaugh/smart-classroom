<template>
<div>
    <div class="accordion" role="tablist">
    <b-card v-for="accordion in accordions" v-bind:key="accordion.num" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="accordion-button" block v-b-toggle="accordion.num" variant="info">{{ accordion.title }}</b-button>
      </b-card-header>
      <b-collapse v-bind:id="accordion.num" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text class="accordion-text">{{ accordion.text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import bootstrapVue from 'bootstrap-vue'

Vue.use(bootstrapVue)

export default {
    data: function() {
        return{
            accordions: [
                {
                    num: 'accordion-1',
                    title: 'Can anyone use these classrooms',
                    text: 'Only professors can operate these classroom, while studnets need to be enrolled'
                },
                {
                    num: 'accordion-2',
                    title: 'Tech in the classroom',
                    text: 'Projector-Epson PowerLite'+ '\n'+
                    'Microphone- Shure MXA910 ' +'\n'+
                    'few cameras'
                },
                {
                    num: 'accordion-3',
                    title: 'Will the lectures be simutanously recorded online while class is taught ',
                    text: ' Depend if GVSU forks up more money' + '\n' +
                    'and expands on development of the this class'
                },
                {
                    num: 'accordion-4',
                    title: 'Where can I submit my questions',
                    text: 'Theres a feedback page' + '\n' + 
                        'just submit your thoughts' + '\n' 
                        
                },
            ]
        };
    },
}
</script>
<style>
:root {
    --fontSizeBase: 14.5px;
    --lgWidth: 1280px;
    --smWidth: 800px;
    --mdWidth: 1000px;
    --maxWidth: 1366px;
    --fontsize: 17px/var(--fontSizeBase) * 100%;
}
.mb-1 {
    padding: .625em;
}
.accordion-text {
    white-space: pre;
    text-align: left;
    padding: .625em;
}
.p-1 {
    display: block;
    background: #F5F5F5;
    padding: .625em;
    color: #000;
    text-align: left;
    word-break: break-word;
    font-family: "lato",sans-serif;
    letter-spacing: 1 / var(--fontSizeBase) * .9px + 0em;
    font-size: 15.5px;
    line-height: 1.75;
}
.accordion-button {
    border: 1px solid #F5F5F5;
    background: #F5F5F5;
    margin-bottom: 1em;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-break: break-word;
    color: #232323;
    line-height: 1.75;
    width: 100%;
    text-align: left;
}
.accordion-button:focus {
    outline: #0065A4 solid 3px !important;
    outline-offset: 6px;
}
</style>
