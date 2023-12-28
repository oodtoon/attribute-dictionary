import { error } from "@sveltejs/kit";

export function load({ params }) {
  let letter = params.slug.slice(0, 1).toLocaleUpperCase();
  if (!isNaN(parseInt(letter))) {
    letter = "ZeroToNine";
  }

  return { letter, slug: params.slug };
}
