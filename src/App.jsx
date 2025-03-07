import Card from "./components/Card";




function App(){

  const main = {
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          gap:"20px",
          flexWrap:"wrap"
  }

  const heading = {

    textAlign:"center",
    color:"green"

  }


    return(

      <>
        <h2 style={heading} >OLX CARDS USING REACTJS</h2>

        <div style={main}>
            <Card name="Chair" price="$ 20.99" desc="This is imported chair from England" image="https://workspace.com.pk/wp-content/uploads/2023/01/Visitor-Chair-10-1536x1536-1.jpg"/>
            <Card name="Iphone 12 Pro Max" price="$ 200.00" desc="Battery Life is 85%" image="https://imageio.forbes.com/specials-images/imageserve/5fafa87f4d1c350231712568/Apple-iPhone-12-Pro-Max-in-gleaming-gold-finish-/960x0.jpg?format=jpg&width=960"/>
            <Card name="Fridge" price="$ 30.00" desc="The Condition is Excellent" image="https://hutch.pk/cdn/shop/files/Hampton-Fridge-Cover-Set.jpg?v=1714530162"/>
            <Card name="Bat" price="$ 15.65" desc="The Material is Amazing" image="https://www.prodirectsport.com/-/media/article-content/cricket/buying-advice/cricket-bat-size-guide/article-bb-cricket-product-advice-articles-1.jpg"/>
            <Card name="Dining Table" price="$ 36.76" desc="New Design Table" image="https://woodc.pk/wp-content/uploads/2023/05/ieqwif.jpg" title="Purchase" / >
            <Card name="Counter" price="$ 5.98" desc="This is Very Good Looking Reception Counter" image="https://image.architonic.com/img_pro2-4/142/1118/counter-skranke-valnod-skraa-b.jpg"/>
            <Card name="T-Shirt" price="$ 14.99" desc="This is imported chair from Australia" image="https://armapparels.com.pk/cdn/shop/files/adult-tshirt-tail-green.png?v=1726052897"/>
            <Card name="Shirt" price="$ 18.99" desc="This is imported chair from NewZealand" image="https://www.givuil.com/cdn/shop/files/sea_green_color_02.jpg?v=1724152099&width=416"/>
            <Card name="Shoes" price="$ 22.99" desc="This is imported chair from China" image="https://i0.wp.com/sageleather.com.pk/wp-content/uploads/2024/10/IMG_3682.jpg?fit=714%2C893&ssl=1"/>
            <Card name="Samsung Galaxy S10 " price="$ 75.99" desc="New Faetured Installed" image="https://images.indianexpress.com/2018/10/samsung-759-3.jpg?w=414"/>
            <Card name="Glasses" price="$ 8.95" desc="This will wear in Sunshine" image="https://media.istockphoto.com/id/517838012/photo/myopia-in-barcelona.jpg?s=612x612&w=0&k=20&c=c54w5UpSJgi4C9aA0E7_9pJhw9ZpqZ7WgO1ieXgFR_M="/>
            <Card name="Smart Led" price="$ 50.45" desc="45 inch screen with Wifi And Bluetooth Options" image="https://wegaflix.com.pk/wp-content/uploads/2022/04/WegaFlix-40-Inch-Frame-Less-Smart-LED-TV.jpg"/>
            
            <Card name="Chair" price="$ 20.99" desc="This is imported chair from England" image="https://workspace.com.pk/wp-content/uploads/2023/01/Visitor-Chair-10-1536x1536-1.jpg"/>
            <Card name="Iphone 12 Pro Max" price="$ 200.00" desc="Battery Life is 85%" image="https://imageio.forbes.com/specials-images/imageserve/5fafa87f4d1c350231712568/Apple-iPhone-12-Pro-Max-in-gleaming-gold-finish-/960x0.jpg?format=jpg&width=960"/>
            <Card name="Fridge" price="$ 30.00" desc="The Condition is Excellent" image="https://hutch.pk/cdn/shop/files/Hampton-Fridge-Cover-Set.jpg?v=1714530162"/>
            <Card name="Bat" price="$ 15.65" desc="The Material is Amazing" image="https://www.prodirectsport.com/-/media/article-content/cricket/buying-advice/cricket-bat-size-guide/article-bb-cricket-product-advice-articles-1.jpg"/>
            <Card name="Dining Table" price="$ 36.76" desc="New Design Table" image="https://woodc.pk/wp-content/uploads/2023/05/ieqwif.jpg" title="Purchase" / >
            <Card name="Counter" price="$ 5.98" desc="This is Very Good Looking Reception Counter" image="https://image.architonic.com/img_pro2-4/142/1118/counter-skranke-valnod-skraa-b.jpg"/>
            <Card name="T-Shirt" price="$ 14.99" desc="This is imported chair from Australia" image="https://armapparels.com.pk/cdn/shop/files/adult-tshirt-tail-green.png?v=1726052897"/>
            <Card name="Shirt" price="$ 18.99" desc="This is imported chair from NewZealand" image="https://www.givuil.com/cdn/shop/files/sea_green_color_02.jpg?v=1724152099&width=416"/>
            <Card name="Shoes" price="$ 22.99" desc="This is imported chair from China" image="https://i0.wp.com/sageleather.com.pk/wp-content/uploads/2024/10/IMG_3682.jpg?fit=714%2C893&ssl=1"/>
            <Card name="Samsung Galaxy S10 " price="$ 75.99" desc="New Faetured Installed" image="https://images.indianexpress.com/2018/10/samsung-759-3.jpg?w=414"/>
            <Card name="Glasses" price="$ 8.95" desc="This will wear in Sunshine" image="https://media.istockphoto.com/id/517838012/photo/myopia-in-barcelona.jpg?s=612x612&w=0&k=20&c=c54w5UpSJgi4C9aA0E7_9pJhw9ZpqZ7WgO1ieXgFR_M="/>
            <Card name="Smart Led" price="$ 50.45" desc="45 inch screen with Wifi And Bluetooth Options" image="https://wegaflix.com.pk/wp-content/uploads/2022/04/WegaFlix-40-Inch-Frame-Less-Smart-LED-TV.jpg"/>  
        </div>      
      
      </>

    )

}


export default App;