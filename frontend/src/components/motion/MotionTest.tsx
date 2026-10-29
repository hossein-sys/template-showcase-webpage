// import { useState } from "react";
import { motion } from "motion/react";

// const mockTemplates = [
//   { id: 1, title: "Modern SaaS Landing", tag: "Tech" },
//   { id: 2, title: "Boutique Restaurant", tag: "Food" },
//   { id: 3, title: "Minimal Portfolio", tag: "Creative" },
// ];

// export function MotionTest() {
//   const [selectedTag, setSelectedTag] = useState("All");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const filtered =
//     selectedTag === "All"
//       ? mockTemplates
//       : mockTemplates.filter((t) => t.tag === selectedTag);

//   return (
//     <div className="min-h-screen bg-slate-50 p-8 text-slate-800">
//       <div className="mx-auto max-w-2xl space-y-8">
//         {/* Entrance Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h1 className="text-3xl font-bold tracking-tight text-slate-900">
//             Motion Setup Verified
//           </h1>
//           <p className="mt-2 text-sm text-slate-500">
//             Testing layout transitions, staggered grids, and AnimatePresence.
//           </p>
//         </motion.div>

//         {/* Filter Pills with Layout Animation */}
//         <div className="flex justify-center gap-2">
//           {["All", "Tech", "Food", "Creative"].map((tag) => (
//             <button
//               key={tag}
//               onClick={() => setSelectedTag(tag)}
//               className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
//                 selectedTag === tag
//                   ? "bg-indigo-600 text-white"
//                   : "bg-white text-slate-600 hover:bg-slate-100"
//               }`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>

//         {/* Staggered and Layout-Aware Cards */}
//         <motion.div layout className="grid gap-4">
//           <AnimatePresence>
//             {filtered.map((item) => (
//               <motion.div
//                 key={item.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
//                 transition={{ duration: 0.25 }}
//                 className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
//               >
//                 <div>
//                   <h3 className="font-medium text-slate-900">{item.title}</h3>
//                   <span className="text-xs text-indigo-500 font-semibold">{item.tag}</span>
//                 </div>
//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setIsModalOpen(true)}
//                   className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
//                 >
//                   Preview
//                 </motion.button>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Modal using AnimatePresence */}
//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0, y: 15 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.9, opacity: 0, y: 15 }}
//                 transition={{ type: "spring", damping: 25, stiffness: 350 }}
//                 onClick={(e) => e.stopPropagation()}
//                 className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
//               >
//                 <h2 className="text-lg font-bold text-slate-900">Modal Live Preview</h2>
//                 <p className="mt-2 text-xs text-slate-500">
//                   Exit and entrance animations are handled smoothly by AnimatePresence.
//                 </p>
//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   className="mt-6 w-full rounded-lg bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
//                 >
//                   Close Modal
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
export default function ButtonDemo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
          <motion.button

        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none"
      >
        Click Me
      </motion.button>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

