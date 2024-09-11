//Perfumes
import ceo from "../assests/images/ceo.jpg"
import st from "../assests/images/st.jpg"
import bv from "../assests/images/bv.jpg"
function Perfume(){
    return(<div class="perfume">
      <div class="perfume_1">
          <img src={ceo} alt="perfume1"  />
          <h1>CEO Woman</h1>
          <p>CEO Woman Perfume is a handpicked fragrance for women who like facing challenges heads on.</p>
      </div>
      <div class="perfume_1">
          <img src={st} alt="perfume1" />
          <h1>Secret Temptation</h1>
          <p>Secret Temptation Romance Perfume is a hallmark of confidence and curiosity.</p>
      </div>
      <div class="perfume_1">
          <img src={bv} alt="perfume1" />
          <h1>Bellavita Date</h1>
          <p>DATE Woman by Bella Vita is a celebration of love and romance.</p>
       </div>
      
  
  </div>)
   }

   export default Perfume