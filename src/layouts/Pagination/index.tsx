// import initHexo from "@/libs/hexo";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// import clsx from "clsx";
// import Link from "next/link";

// export const PAGE_SIZE = 10;

// async function Pagination({ currentPage }: { currentPage: number }) {
//   const hexo = await initHexo();
//   const allPostNum = hexo.database.model("Post").find({}).sort("-date").length;
//   const PageTotal = Math.ceil(allPostNum / PAGE_SIZE);
//   const Pages = Array.from({ length: PageTotal }, (_, i) => i + 1);
//   const PrevPage = currentPage === 1 ? 1 : currentPage - 1;
//   const NextPage = currentPage === PageTotal ? PageTotal : currentPage + 1;
//   const PrevPageLink = PrevPage === 1 ? "/" : `/page/${PrevPage}`;
//   const NextPageLink =
//     NextPage === PageTotal ? `/page/${PageTotal}` : `/page/${NextPage}`;

//   return (
//     <div>
//       <nav
//         className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//         aria-label="Pagination"
//       >
//         <Link
//           href={PrevPageLink}
//           className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//         >
//           <span className="sr-only">Previous</span>
//           <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//         </Link>
//         {Pages.map((page) => (
//           <a
//             key={page}
//             href={page === 1 ? "/" : `/page/${page}`}
//             aria-current="page"
//             className={clsx(
//               "relative hidden items-center px-4 py-2 text-sm font-semibold  focus:z-20 md:inline-flex",
//               currentPage !== page &&
//                 "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0",
//               currentPage === page &&
//                 "z-10 bg-primary-blue text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
//             )}
//           >
//             {page}
//           </a>
//         ))}

//         {/* <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
//           ...
//         </span> */}
//         <a
//           href={NextPageLink}
//           className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//         >
//           <span className="sr-only">Next</span>
//           <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//         </a>
//       </nav>
//     </div>
//   );
// }

// export default Pagination;
