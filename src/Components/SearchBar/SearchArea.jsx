import React from "react";
import "../../App.css";

const SearchArea = (props) => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 30 }}>
      <div className="row">
        <section>
          <form onSubmit={props.handleSubmit} action="">
            <div>
              <input
                placeholder="Search movie"
                onChange={props.handleChange}
                id="first_name2"
                type="text"
                class="validate"
              />
            </div>
          </form>
        </section>
      </div>
    </div>
    // </div>
  );
};

export default SearchArea;

// const SearchArea = (props) => {
//   return (
//     // <div style={{ paddingTop: 30, paddingBottom: 30 }}>
//     <div>
//       <section>
//         <form onSubmit={props.handleSubmit} action="">
//           <div className="input_field">
//             <input
//               placeholder="Search movie"
//               onChange={props.handleChange}
//               id="first_name2"
//               type="text"
//               class="validate"
//             />
//           </div>
//         </form>
//       </section>
//     </div>
//     // </div>
//   );
// };

// export default SearchArea;

// const SearchArea = (props) => {
//   return (
//     <div className="container" style={{ paddingTop: 30, paddingBottom: 30 }}>
//       <div className="row">
//         <section className="test col s4 offset-s4">
//           <form onSubmit={props.handleSubmit} action="">
//             <div class="input-field">
//               <input
//                 placeholder="Search movie"
//                 onChange={props.handleChange}
//                 id="first_name2"
//                 type="text"
//                 class="validate"
//               />
//             </div>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default SearchArea;

// const SearchArea = (props) => {
//   return (
//     <div>
//       {/* <div onChange={props.handleSubmit()}></div> */}
//       {/* to send fetched data from PopularMovie component to PopularMovieDetails Component and see this data in carousel */}
//     </div>
//   );
// };

// export default SearchArea;
