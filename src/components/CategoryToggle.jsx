

// import React, { useState } from "react";

// const CategoryToggle = () => {
//   const [activeCategory, setActiveCategory] = useState("Clothing");

//   return (
//     <div className="flex gap-5 justify-center py-1 mt-7 w-full text-sm font-medium leading-5 bg-green-200 rounded-xl max-md:flex-wrap max-md:max-w-full">
//       <button
//         onClick={() => setActiveCategory("Clothing")}
//         className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Clothing"
//           ? "bg-stone-50 text-stone-900"
//           : "text-stone-500"
//           } max-md:px-5 max-md:max-w-full`}
//       >
//         Handbags
//       </button>
//       <button
//         onClick={() => setActiveCategory("Accessories")}
//         className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Accessories"
//           ? "bg-stone-50 text-stone-900"
//           : "text-stone-500"
//           } max-md:px-5 max-md:max-w-full`}
//       >

//       </button>
//       <button
//         onClick={() => setActiveCategory("Watches")}
//         className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Watches"
//           ? "bg-stone-50 text-stone-900"
//           : "text-stone-500"
//           } max-md:px-5 max-md:max-w-full`}
//       >
//         Watches
//       </button>
//       <button
//         onClick={() => setActiveCategory("Jewelries")}
//         className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Jewelries"
//           ? "bg-stone-50 text-stone-900"
//           : "text-stone-500"
//           } max-md:px-5 max-md:max-w-full`}
//       >
//         Jewelries
//       </button>
//       <button
//         onClick={() => setActiveCategory("Jewelries")}
//         className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Jewelries"
//           ? "bg-stone-50 text-stone-900"
//           : "text-stone-500"
//           } max-md:px-5 max-md:max-w-full`}
//       >
//         Shoes
//       </button>
//       <button
//         onClick={() => setActiveCategory("Jewelries")}
//         className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Jewelries"
//           ? "bg-stone-50 text-stone-900"
//           : "text-stone-500"
//           } max-md:px-5 max-md:max-w-full`}
//       >
//         Sunglasses
//       </button>

//     </div>
//   );
// };

// export default CategoryToggle;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const CategoryToggle = () => {
  let navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Clothing");

  return (
    <div className="flex gap-5 justify-center py-1 mt-7 w-full text-sm font-medium leading-5 bg-green-200 rounded-xl max-md:flex-wrap max-md:max-w-full">
      <button
        onClick={() => navigate("/handbags")}
        className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Handbags"
          ? "bg-stone-50 text-stone-900"
          : "text-stone-500"
          } max-md:px-5 max-md:max-w-full`}
      >
        Handbags
      </button>

      <button
        onClick={() => setActiveCategory("Watches")}
        className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Watches"
          ? "bg-stone-50 text-stone-900"
          : "text-stone-500"
          } max-md:px-5 max-md:max-w-full`}
      >
        Watches
      </button>
      <button
        onClick={() => setActiveCategory("Jewelries")}
        className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Jewelries"
          ? "bg-stone-50 text-stone-900"
          : "text-stone-500"
          } max-md:px-5 max-md:max-w-full`}
      >
        Jewelries
      </button>
      <button
        onClick={() => setActiveCategory("Shoes")}
        className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Shoes"
          ? "bg-stone-50 text-stone-900"
          : "text-stone-500"
          } max-md:px-5 max-md:max-w-full`}
      >
        Shoes
      </button>
      <button
        onClick={() => setActiveCategory("Sunglasses")}
        className={`px-2 py-1.5 rounded-xl shadow-sm ${activeCategory === "Sunglasses"
          ? "bg-stone-50 text-stone-900"
          : "text-stone-500"
          } max-md:px-5 max-md:max-w-full`}
      >
        Sunglasses
      </button>
    </div>
  );
};

export default CategoryToggle;