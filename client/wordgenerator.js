const text = document.querySelector('.randomText');
const generate = document.querySelector('#myBtn');
const frmSelector = document.querySelector('.form-select');

const wordArr = ['excavator', 'spider', 'mushroom', 'black hole', 'jack-o-lantern','book','dog','shirt','drum','shoe','hat','kite','cupcake','socks','phone','skateboard','airplane','apple','cherry','snow',
'elephant','egg','ball','underwear','Christmas tree','smile','cookie','snowman','fish','TV','doll','sleep','nose','sun','bubble','candy','ocean','house','star',
'ice cream','spider','cup','bird','butterfly','grapes','bed','trash can','sad','eyes','sandwich','moon','roof', 'storm','pancakes','flag pole','wing','watch','winter','dive','chef','book shelf','stop light','recess','clock','sleeping bag','braces',
'rice','baseball','sand','city','garbage','toaster','sunglasses','elbo','hill','desk','vacation','subway','tent','gummy bears','fang','turkey','mailbox','farm',
'spring','jump','laptop','list','pillowcase','teacher','police','hair tie','heaven','firefighter'];


generate.addEventListener('click', () => {
  let gen = Math.floor(Math.random() * wordArr.length);
  text.innerText = wordArr[gen];
});