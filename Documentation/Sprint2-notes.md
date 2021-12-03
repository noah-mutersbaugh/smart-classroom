Notes on Sprint2:

1. src/views/FAQ.vue to have cards component instead of repeated html
2. remove comments in router
3. dbindex.js --> David organize the file a little bit better. Add comments to help.
4. FAQComponent.vue clean up formatting of code to find issues more easily.
5. Remove all unnecessary CSS from bottom of components
6. More professional/specific phrases in the release
7. Remove src/models/classroomsmodel.js
8. Move src/router/dbindex.js to src/database/dbindex.js
9. MapComponent.vue --> clean up formatting
10. Get a keycard for access to the AC room next to Dr. Engelsma's office
11. Ask Dr. Engelsma to email them the last 5 digits on the card



https://gvsu.edu/smart-classroom?room=MK-1-111

var room = this.$route.query.room

if(roomExistsInURL() && roomExistsInDatabase){
  if(loggedIn() && validUser()){
     techChangeSettings(room);
  } else {
     promptLogIn();
  }
}