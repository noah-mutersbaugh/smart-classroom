<template>
  <div class="Map Component">
    <h1>{{ msg }}</h1>
<div class="containe">
     <iframe
          
            title="Location GVSUAllendale"
            style="width: 100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
           src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Campus%20Dr,%20Allendale,%20MI%2049401+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            
          ></iframe>
          
        </div>
        <h2 class="padding-none h3">Where to Find Us</h2>
        <p>
          The Learning Center is located somewhere in Grand , just use you
          imagination . location TBD
        </p>
      </div>
    

 
      
        
           
     
  
</template>

<script>
export default {
  name: "MapComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: "EB Garamond", serif;
  font-weight: normal;
  text-transform: none;
  letter-spacing: 0.0144827586em;
  font-size: 289.6551724138%;
  padding-top: 0;
  margin-bottom: 0.3452380952em;
  color: #000;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>