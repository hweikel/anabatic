# Affiliation wordmarks

Marks used in the "Our Team" affiliation rows on `index.html`. These are
institutional **wordmarks** rather than crests — chosen because a crest is
unreadable at 26px, while the wordmark is the form an international family
recognises on sight.

| File | Institution | Source |
|---|---|---|
| `berkeley.svg` | UC Berkeley | Wikipedia, *University of California, Berkeley Logo 2024.svg* |
| `harvard.svg` | Harvard University | Wikimedia Commons, *Harvard University logo.svg* |
| `oxford.svg` | University of Oxford | Wikimedia Commons, *University of Oxford.svg* |
| `imperial.svg` | Imperial College London | Wikimedia Commons, *Imperial logo.svg* |
| `penn.svg` | University of Pennsylvania | Wikimedia Commons, *University of Pennsylvania wordmark.svg* |
| `uchicago.svg` | University of Chicago | Wikimedia Commons, *University of Chicago wordmark.svg* |
| `ucla.svg` | UCLA | Wikimedia Commons, *University of California, Los Angeles logo.svg* |
| `yale.svg` | Yale University | Wikimedia Commons, *Yale University logo.svg* |
| `amazon.svg` | Amazon | Wikimedia Commons, *Amazon logo.svg* |
| `roblox.svg` | Roblox | Wikimedia Commons, *Roblox Logo 2022.svg* |

All run through SVGO; the set totals ~130KB.

## Sizing

`styles.css` sizes these in three groups rather than at one shared height. A
single word set at full height (Berkeley, Yale, UCLA, Amazon, Roblox) reads far
heavier than a crest-plus-small-caps lockup (Oxford, Harvard) at that same
height, so the groups are sized against each other instead of against the box.
If you add a mark, drop it into whichever group it matches optically.

## Note on usage

These are third-party trademarks, used here to indicate where team members
studied or worked. Several rights holders — Harvard, Yale and Amazon among
them — restrict use of their marks in ways that could imply affiliation or
endorsement. If any of them objects, the fix is to drop the `<img>` from that
person's `.team-affiliations` block; the institution is already named in the
bio text, so nothing is lost but the picture.
