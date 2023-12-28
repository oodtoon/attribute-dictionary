import { error } from "@sveltejs/kit";

export function load({ params }) {
  let letter = params.slug.slice(0, 1).toLocaleUpperCase()

   if (letter) {
    if (!isNaN(parseInt(letter))) {
      letter = "ZeroToNine";
    }
    return { letter, slug: params.slug }
   } else {
    throw error(404, params.slug)
   }
}