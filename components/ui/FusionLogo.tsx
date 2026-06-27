// export default function FusionLogo() {
//   return (
//     <div className="flex flex-col items-center">

//       {/* Logo Box */}

//       <div
//         className="
//         relative
//         flex
//         h-56
//         w-56
//         flex-col
//         items-center
//         justify-center
//         border-4
//         border-white
//         bg-black/20
//         backdrop-blur-sm
//         "
//       >

//         {/* Purple Glow */}

//         <div
//           className="
//           absolute
//           inset-0
//           -z-10
//           bg-fuchsia-500/10
//           blur-3xl
//           "
//         />

//         <span
//           className="
//           text-6xl
//           font-black
//           tracking-tight
//           leading-none
//           "
//         >
//           FUS
//         </span>

//         <span
//           className="
//           text-6xl
//           font-black
//           tracking-tight
//           leading-none
//           "
//         >
//           ION
//         </span>

//       </div>

//       {/* Brand */}

//       <h1
//         className="
//         mt-6
//         text-4xl
//         font-black
//         tracking-[0.35em]
//         text-white
//         "
//       >
//         FUSION AI
//       </h1>

//       <p
//         className="
//         mt-4
//         text-lg
//         text-zinc-400
//         "
//       >
//         Discover Your Signature Scent
//       </p>

//     </div>
//   );
// }
export default function FusionLogo() {
  return (
    <div className="flex flex-col items-center">

      <div className="fusion-logo-box">

        <div className="fusion-logo-shine" />

        <div className="fusion-logo-grid">

          <span>FUS</span>

          <span>ION</span>

        </div>

      </div>

      <p className="fusion-logo-tagline">
        LUXURIOUS PERFUME
      </p>

    </div>
  );
}