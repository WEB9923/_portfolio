import {PuffLoader} from "react-spinners";

export default function Loader() {
   return (
      <div style={{
         position:"absolute",
         left:"50%",
         top:"50%",
         transform:"translate(-50%,-50%)"
      }}>
         <PuffLoader
            color="#7C8363"
            size={60}
            speedMultiplier={1.5}
         />
      </div>
   );
}
