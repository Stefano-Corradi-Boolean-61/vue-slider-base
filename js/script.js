

const app = new Vue({

  el: '#app',
  data:{
    photos:[
      'img/01.jpg',
      'img/02.jpg',
      'img/03.jpg',
      'img/04.jpg',
      'img/05.jpg'
    ],
    counterPhoto: 0
  },
  methods:{
    nextPhoto(){
      this.counterPhoto++;
      // se il contatore è più alto dell'ultimo elemento dell'array
      // lo resetto a 0
      if(this.counterPhoto > this.photos.length - 1){
        this.counterPhoto = 0;
      }
      console.log(this.counterPhoto);
    },
    prevPhoto(){
      this.counterPhoto--;
      // se il contatore  inferiore a 0
      // lo faccio puntare all'ultimo elemnto dell'array
      if(this.counterPhoto < 0){
        this.counterPhoto = this.photos.length - 1;
      }
      console.log(this.counterPhoto);
    }
  },
  created(){
    // questo metodo viene scatenato quando l'app è pronta ma non ho ancora letto il DOM
    // qui metto le funzioni che partono di default
    console.log('APP CREATA')
  },
  mounted(){
    // questo metodo viene scatenato quando l'app è pronta
    // qui metto le funzioni che partono di default
    console.log('APP MONTATA')

    // devo usare l'arrow function
    
    setInterval( () => {
      console.log('--> setInterval', this);
      this.nextPhoto();
    }, 3000)
  }

});