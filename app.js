const text = document.querySelector('.text');
const generate = document.querySelector('.generate');

const easyWordArr = ['jack-o-lantern','book','dog','shirt','drum','shoe','hat','kite','cupcake','socks','phone','skateboard','airplane','apple','cherry','snow',
'elephant','egg','ball','underwear','Christmas tree','smile','cookie','snowman','fish','TV','doll','sleep','nose','sun','bubble','candy','ocean','house','star',
'ice cream','spider','cup','bird','butterfly','grapes','bed','trash can','sad','eyes','sandwich','moon','roof'];

generate.addEventListener('click', ()=>{
  let gen = Math.floor(Math.random() * easyWordArr.length);
  text.innerText = easyWordArr[gen];
});