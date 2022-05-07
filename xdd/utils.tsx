import React from "react";

const isKnownTerm = (term, knownTerms) => {
  let terms_ = Object.values(knownTerms);
  let terms = [];
  terms_.map((termss: any[]) => {
    terms = [...terms, ...termss];
  });
  terms = terms.map((term) => term.toLowerCase());
  term = term.toLowerCase();

  return terms.includes(term);
};
