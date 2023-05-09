import { createClient } from 'next-sanity';

export default function Main(){
  return <>
    <article >
      <section className="product container">
        <div>
          <img src="/gulab_jamun.jpeg" alt="gulab jamun in a plate with sweet chasni being poured on top"/>
        </div>
        <div className="product_details">
          <h2 className="title">Gulab Jamun</h2>
          <p className="product_description">Our Gulab Jamuns are specially made with the best quality of ingredients and experienced chefs that make wonders in the kitchen just for you.</p>
          <button className="buy-btn btn">Buy Now</button>
        </div>
      </section>
    </article>
  </>
}

const client = createClient({
  projectId: "bxnm8d7k",
  dataset:"production",
  apiVersion:"2023-05-07",
  useCdn:false
})

/*export async function getStaticProps(){
  const pets = await client.fetch(`*[_type=="pet"]`)
  return {
    props:{
      pets
    }
  };
}
<div>
      <h2 className="title">Pets</h2>
        {
          pets.map((pet)=>{
            return (
            <h4 key={pet._id}>{pet?.name}</h4>)
          })
        }
      {!pets.length>0 && (
            <p>¯\_(ツ)_/¯ deal with it.</p>)}
   </div>
*/
