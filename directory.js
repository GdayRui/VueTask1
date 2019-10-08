(function() {
  "use strict";

  Vue.component('people-filter',{
    data: function(){
      return {
        search : {
          name : '',
          title : '',
          intern : false
        }
      }
    },
    template: ' <form action="" id="directory-filters"> \
    <div class="group"> \
      <label for="txt-name">Name:</label> \
      <input v-model="search.name" type="text" name="name" value="" placeholder="Name of employee" id="txt-name"> \
    </div> \
    <div class="group"> \
      <label for="sel-title">Job Title:</label> \
      <select :value="search.title" name="sel-title" id="sel-title"> \
        <option value="">- Select -</option> \
        <option value="architect">Architect</option> \
        <option value="designer">Designer</option> \
        <option value="contractor">Contractor</option> \
        <option value="staff">Support Staff</option> \
      </select> \
    </div> \
    <div class="group"> \
      <label><input v-model="search.intern" type="checkbox" value="1"> Intern</label> \
    </div> \
    </form> '
  })
 
  Vue.component('people-profile',{
    data: function(){
      return {

      }
    },
    props:['people'],
    template: '<div> \
    <div v-for="person in people"> \
      <h3> {{ person.name }}, {{ person.title }}</h3> \
      <p><img class=" size-medium wp-image-14 alignright" :src = person.img \
      alt="tony_salvador" width="300" height="300"  sizes="(max-width: 300px) 100vw, 300px" /> \
      {{ person.bio }} </p> \
    </div></div>'
  })
 /*
  Vue.component('people-profile',{
    props:['people'],
    template: '<div> 123</div>'
  })
*/
  var directory = new Vue({
    el: '#directory-root',
    data: {
      people: window.LMDirectory.people,
      testNum: 242
    },
    
  })

})();
