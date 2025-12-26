    import {  useEffect } from "react";
  import Card from "../../globals/components/card/Card";
  import { useAppDispatch, useAppSelector } from "../../store/hook";
    import Hero from "./components/Hero";
  import { fetchProducts } from "../../store/productSlice";


    const Home = () => {


      const dispatch = useAppDispatch()
    const {status,product}= useAppSelector((state)=>state.products)

      useEffect(()=>{
        dispatch(fetchProducts())
      },[])
      return (
        <>
          <Hero />
          <div className="flex flex-col items-center mt-8">
          <h3 className="mb-6 text-2xl font-bold">Top Products </h3>
          <div className="flex flex-wrap justify-center gap-6">
           {
            product.length > 0 && product.map((pd)=>{
              return(
                <Card key={pd.id} data={pd} />
              )
            })
           }
          </div>
        </div>

        </>
      );
    };

    export default Home