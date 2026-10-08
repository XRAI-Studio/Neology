# Word Forge vocabulary audit

Only the entries with a `## word` section below are marked `reviewed:true`. Words listed under **Quarantined** are held back on purpose, with a reason. All other records stay in the runtime lexicon data for preservation, but Forge, Decode, and the word Flashcards deck do not teach them. `node scripts/review-status.mjs` shows current progress.

The first six entries were reviewed on 2026-07-20 against the Online Etymology Dictionary. From 2026-10-07, words are reviewed in stem-family batches against Wiktionary, because Etymonline blocks automated lookups. Each English entry is cited, plus the Latin entry where the English page stops before the root. The quoted phrases come from the fetched page text.

## accurate

- Record: `{prefix:"ad-", stem:"cur", suffix:"-ate", literal:"take care of", definition:"correct in all details; exact"}`
- Review: corrected the source's false `curr`/“run” decomposition and completed its truncated definition.
- Reference: Online Etymology Dictionary, [accurate](https://www.etymonline.com/word/accurate) — Latin *accurare* “take care of,” from *ad* + *curare*.

## container

- Record: `{prefix:"con-", stem:"ten", suffix:"-er", literal:"hold with", definition:"an object used to hold or transport things"}`
- Review: completed the truncated definition and confirmed the `con-` + `ten` family.
- Reference: Online Etymology Dictionary, [container](https://www.etymonline.com/word/container) and its linked *contain* entry — Latin *continere*, “hold together, enclose.”

## evolution

- Record: `{prefix:"ex-", stem:"volv", suffix:"-ion", literal:"roll out of", definition:"the gradual development of something, especially from a simpler to a more complex form"}`
- Review: completed the truncated definition and confirmed the “unrolling” origin.
- Reference: Online Etymology Dictionary, [evolution](https://www.etymonline.com/word/evolution) — Latin *evolutio*, “unrolling,” from *evolvere*.

## sensor

- Record: `{prefix:null, stem:"sens", suffix:"-or", literal:"feel", definition:"a device that detects or measures a physical property and records, indicates, or responds to it"}`
- Review: completed the truncated device definition and confirmed the sense/perception family.
- Reference: Online Etymology Dictionary, [sensor](https://www.etymonline.com/word/sensor) — a device giving a signal about physical activity, related to *sensory* and *sense*.

## infection

- Record: `{prefix:"in-", stem:"fac", suffix:"-ion", literal:"make into", definition:"the invasion and growth of harmful microorganisms in the body"}`
- Review: replaced the irrelevant phonetics gloss with the common disease sense; confirmed the Latin *inficere* family.
- Reference: Online Etymology Dictionary, [infection](https://www.etymonline.com/word/infection) — “infectious disease; contaminated condition,” from Latin *infectio*/*inficere*.

## version

- Record: `{prefix:null, stem:"vert", suffix:"-ion", literal:"turn", definition:"a particular form of something that differs from other forms"}`
- Review: corrected the source's false `ver`/“true” mapping to the `vers`/`vert` “turn” family and clarified the definition.
- Reference: Online Etymology Dictionary, [version](https://www.etymonline.com/word/version) — Medieval Latin *versio*, “a turning; a translation,” from Latin *vertere*, “to turn.”

## accept

- Record: `{prefix:"ad-", stem:"cap", suffix:null, literal:"take to", definition:"to receive something offered, or agree to it"}`
- Review: Confirmed `ad-` + `cap`; replaced the narrow "hold as true" gloss with the main sense.
- Reference: Wiktionary, [accept](https://en.wiktionary.org/wiki/accept#English) — from Latin *acceptāre* "receive", frequentative of *accipiō*, formed from *ad-* + *capiō* "to take".

## acceptable

- Record: `{prefix:"ad-", stem:"cap", suffix:"-able", literal:"take to", definition:"good enough to be accepted; satisfactory"}`
- Review: Confirmed as *accept* + *-able*; clarified the definition.
- Reference: Wiktionary, [acceptable](https://en.wiktionary.org/wiki/acceptable#English) — from Late Latin *acceptābilis* "worthy of acceptance"; morphologically *accept* + *-able*.

## capable

- Record: `{prefix:null, stem:"cap", suffix:"-able", literal:"take", definition:"having the ability to do something"}`
- Review: Confirmed `cap` + `-able`; replaced the obscure "possibly accepting or permitting" gloss.
- Reference: Wiktionary, [capable](https://en.wiktionary.org/wiki/capable#English) — from Late Latin *capābilis*.
- Reference: Wiktionary (Latin), [capabilis](https://en.wiktionary.org/wiki/capabilis#Latin) — *capābilis* = *capiō* "to hold, to contain, to take" + *-ābilis* "-able".

## capture

- Record: `{prefix:null, stem:"cap", suffix:"-ure", literal:"take", definition:"the act of taking or seizing something by force"}`
- Review: Confirmed `cap` + `-ure`; replaced the legal "dispossessing an owner" gloss.
- Reference: Wiktionary, [capture](https://en.wiktionary.org/wiki/capture#English) — from Latin *captūra*.
- Reference: Wiktionary (Latin), [captura](https://en.wiktionary.org/wiki/captura#Latin) — *captūra* = *capiō* "capture, seize, take" + *-tūra*.

## concept

- Record: `{prefix:"con-", stem:"cap", suffix:null, literal:"take with", definition:"an abstract or general idea"}`
- Review: Confirmed `con-` + `cap` and shortened the definition.
- Reference: Wiktionary, [concept](https://en.wiktionary.org/wiki/concept#English) — from Latin *conceptus* "a thought, purpose, also a conceiving", from *concipiō* "to take in, conceive".
- Reference: Wiktionary (Latin), [concipio](https://en.wiktionary.org/wiki/concipio#Latin) — *concipiō* = *con-* + *capiō* "take".

## deception

- Record: `{prefix:"de-", stem:"cap", suffix:"-ion", literal:"take down", definition:"the act of tricking someone into believing something untrue"}`
- Review: Confirmed `de-` + `cap` + `-ion`; replaced the stage-magic "illusory feat" gloss.
- Reference: Wiktionary, [deception](https://en.wiktionary.org/wiki/deception#English) — from Latin *dēcipiō* "to deceive".
- Reference: Wiktionary (Latin), [decipio](https://en.wiktionary.org/wiki/decipio#Latin) — *dēcipiō* = *dē-* + *capiō* "capture, take".

## except

- Record: `{prefix:"ex-", stem:"cap", suffix:null, literal:"take out of", definition:"not including; other than"}`
- Review: Confirmed `ex-` + `cap`; replaced the rare "take exception to" sense with the everyday one.
- Reference: Wiktionary, [except](https://en.wiktionary.org/wiki/except#English) — from Middle French *excepter*, from Latin *exceptus*.
- Reference: Wiktionary (Latin), [excipio](https://en.wiktionary.org/wiki/excipio#Latin) — *excipiō* = *ex-* + *capiō* "take".

## exception

- Record: `{prefix:"ex-", stem:"cap", suffix:"-ion", literal:"take out of", definition:"something that is left out of a general rule or group"}`
- Review: Confirmed `ex-` + `cap` + `-ion`; replaced "a deliberate act of omission".
- Reference: Wiktionary, [exception](https://en.wiktionary.org/wiki/exception#English) — ultimately from Latin *exceptiō*; equivalent to *except* + *-ion*.
- Reference: Wiktionary (Latin), [excipio](https://en.wiktionary.org/wiki/excipio#Latin) — *excipiō* = *ex-* + *capiō* "take".

## incapable

- Record: `{prefix:"in-", stem:"cap", suffix:"-able", literal:"not take", definition:"not able to do something"}`
- Review: Confirmed `in-` (not) + *capable*; removed the dictionary usage note from the definition.
- Reference: Wiktionary, [incapable](https://en.wiktionary.org/wiki/incapable#English) — from Middle French *incapable*, equivalent to *in-* (not) + *capable*.

## intercept

- Record: `{prefix:"inter-", stem:"cap", suffix:null, literal:"take between", definition:"to stop or catch something on its way to somewhere else"}`
- Review: Confirmed `inter-` + `cap`; expanded the terse definition.
- Reference: Wiktionary, [intercept](https://en.wiktionary.org/wiki/intercept#English) — from Latin *interceptum*, past participle of *intercipiō*.
- Reference: Wiktionary (Latin), [intercipio](https://en.wiktionary.org/wiki/intercipio#Latin) — *intercipiō* = *inter-* + *capiō*.

## occupation

- Record: `{prefix:"ob-", stem:"cap", suffix:"-ion", literal:"take against", definition:"a person's job or profession"}`
- Review: Confirmed `ob-` + `cap` + `-ion`. Latin *occupō* is built on the root of *capiō* rather than being a direct compound, which still fits the `cap` family. Chose the job sense, which learners meet first.
- Reference: Wiktionary, [occupation](https://en.wiktionary.org/wiki/occupation#English) — from Latin *occupātiō*, from *occupō* "occupy, seize".
- Reference: Wiktionary (Latin), [occupo](https://en.wiktionary.org/wiki/occupo#Latin) — from *ob-* and the root of *capiō* "capture, seize".

## perception

- Record: `{prefix:"per-", stem:"cap", suffix:"-ion", literal:"take through", definition:"the ability to notice and understand things through the senses"}`
- Review: Confirmed `per-` + `cap` + `-ion`; replaced the circular "process of perceiving".
- Reference: Wiktionary, [perception](https://en.wiktionary.org/wiki/perception#English) — from Latin *perceptiō* "a receiving or collecting, perception, comprehension", from *percipiō* "to perceive, observe".
- Reference: Wiktionary (Latin), [percipio](https://en.wiktionary.org/wiki/percipio#Latin) — *percipiō* = *per-* "through" + *capiō* "capture, seize; understand".

## receipt

- Record: `{prefix:"re-", stem:"cap", suffix:null, literal:"take back", definition:"a written record showing that something was received or paid for"}`
- Review: Confirmed `re-` + `cap`; chose the everyday paper-receipt sense.
- Reference: Wiktionary, [receipt](https://en.wiktionary.org/wiki/receipt#English) — from Latin *receptus*, perfect passive participle of *recipiō*, itself from *re-* "back" + *capiō* "to take".

## receiver

- Record: `{prefix:"re-", stem:"cap", suffix:"-er", literal:"take back", definition:"a person or device that receives something"}`
- Review: Confirmed as *receive* + *-er*; widened the TV-only definition.
- Reference: Wiktionary, [receiver](https://en.wiktionary.org/wiki/receiver#English) — later also reformed as *receive* + *-er*.
- Reference: Wiktionary, [receive](https://en.wiktionary.org/wiki/receive#English) — from Latin *recipiō* "take back, accept", from *re-* "back" + *capiō* "to take".

## reception

- Record: `{prefix:"re-", stem:"cap", suffix:"-ion", literal:"take back", definition:"the act of receiving, or a formal party to welcome guests"}`
- Review: Confirmed `re-` + `cap` + `-ion`; combined the core and party senses.
- Reference: Wiktionary, [reception](https://en.wiktionary.org/wiki/reception#English) — from Latin *receptiō* "the act of receiving", from *recipiō*, from *re-* "back" + *capiō*.

## abduction

- Record: `{prefix:"ab-", stem:"duc", suffix:"-ion", literal:"lead away from", definition:"the act of illegally taking someone away, usually by force"}`
- Review: Confirmed `ab-` + `duc` + `-ion`; removed the odd "a family member" ending.
- Reference: Wiktionary, [abduction](https://en.wiktionary.org/wiki/abduction#English) — from Latin *abductiō* "a robbing; an abduction", from *abdūcō* "to take or lead away", from *ab* "away" + *dūcō* "to lead".

## conduct

- Record: `{prefix:"con-", stem:"duc", suffix:null, literal:"lead with", definition:"to lead or direct something"}`
- Review: Confirmed `con-` + `duc`; simplified the definition.
- Reference: Wiktionary, [conduct](https://en.wiktionary.org/wiki/conduct#English) — from Latin *conductus*, perfect passive participle of *condūcō* "bring together".
- Reference: Wiktionary (Latin), [conduco](https://en.wiktionary.org/wiki/conduco#Latin) — *condūcō* = *con-* + *dūcō* "lead".

## conductor

- Record: `{prefix:"con-", stem:"duc", suffix:"-or", literal:"lead with", definition:"a person who leads a musical group"}`
- Review: Confirmed the `con-` + `duc` family via Latin *conductor*.
- Reference: Wiktionary, [conductor](https://en.wiktionary.org/wiki/conductor#English) — from Old French *conduitor*, from Latin *conductor*.
- Reference: Wiktionary (Latin), [conduco](https://en.wiktionary.org/wiki/conduco#Latin) — *condūcō* = *con-* + *dūcō* "lead".

## educate

- Record: `{prefix:"ex-", stem:"duc", suffix:"-ate", literal:"lead out of", definition:"to teach or train someone"}`
- Review: Confirmed `ex-` + `duc` + `-ate`, with a caveat for reviewers: Latin *ēducō* "bring up" is formed from *ex-* + *dux* (leader, itself from *dūcō*), and Wiktionary's *education* entry links it to *ēdūcō* "to lead forth". Both paths stay in the `duc` family.
- Reference: Wiktionary, [educate](https://en.wiktionary.org/wiki/educate#English) — from Latin *ēducātus*, perfect passive participle of *ēducō* "to bring up, train, nourish".
- Reference: Wiktionary, [education](https://en.wiktionary.org/wiki/education#English) — from *ēducō* "to educate, train", from *ēdūcō* "to lead forth, to take out".
- Reference: Wiktionary (Latin), [educo](https://en.wiktionary.org/wiki/educo#Latin) — *ēdūcō* = *ex-* + *dūcō* "to lead"; *ēducō* = *ex-* + *dux* + *-ō*.

## education

- Record: `{prefix:"ex-", stem:"duc", suffix:"-ion", literal:"lead out of", definition:"the process of teaching and learning, especially at school"}`
- Review: Confirmed; see the *educate* caveat.
- Reference: Wiktionary, [education](https://en.wiktionary.org/wiki/education#English) — from Latin *ēducātiō* "a breeding, bringing up, rearing", from *ēducō* "to educate, train", from *ēdūcō* "to lead forth, to take out".

## produce

- Record: `{prefix:"pro-", stem:"duc", suffix:null, literal:"lead forward", definition:"to make, grow, or bring something into being"}`
- Review: Confirmed `pro-` + `duc`; widened the definition.
- Reference: Wiktionary, [produce](https://en.wiktionary.org/wiki/produce#English) — from Latin *prōdūcō* "to lead forth", from *prō-* "forth, forward" + *dūcō* "to lead, bring".

## producer

- Record: `{prefix:"pro-", stem:"duc", suffix:"-er", literal:"lead forward", definition:"a person, company, or living thing that produces something"}`
- Review: Confirmed as *produce* + *-er*.
- Reference: Wiktionary, [producer](https://en.wiktionary.org/wiki/producer#English) — *produce* + *-er* (agent noun).

## product

- Record: `{prefix:"pro-", stem:"duc", suffix:null, literal:"lead forward", definition:"something that is made or grown, especially to be sold"}`
- Review: Confirmed `pro-` + `duc`; replaced the plural "commodities" gloss.
- Reference: Wiktionary, [product](https://en.wiktionary.org/wiki/product#English) — from Latin *prōductus*, perfect participle of *prōdūcō*.

## production

- Record: `{prefix:"pro-", stem:"duc", suffix:"-ion", literal:"lead forward", definition:"the act or process of producing something"}`
- Review: Confirmed `pro-` + `duc` + `-ion`; definition unchanged.
- Reference: Wiktionary, [production](https://en.wiktionary.org/wiki/production#English) — from Latin *prōductiō*; equivalent to *produce* + *-tion*.

## productive

- Record: `{prefix:"pro-", stem:"duc", suffix:"-ive", literal:"lead forward", definition:"producing a lot, or giving useful results"}`
- Review: Confirmed `pro-` + `duc` + `-ive`.
- Reference: Wiktionary, [productive](https://en.wiktionary.org/wiki/productive#English) — from Late Latin *prōductīvus*, equivalent to *product* + *-ive*.

## reduce

- Record: `{prefix:"re-", stem:"duc", suffix:null, literal:"lead back", definition:"to make something smaller or less"}`
- Review: Confirmed `re-` + `duc`; replaced "cut down on" with a full definition.
- Reference: Wiktionary, [reduce](https://en.wiktionary.org/wiki/reduce#English) — from Latin *redūcō*, from *re-* "back" + *dūcō* "lead".

## Sampling decision

Every reviewed entry is checked word by word against its cited reference; nothing is promoted by automated heuristics. Each stem-family batch is then independently reviewed by Codex and spot-checked by the project owner (about 10% of the batch) before it is merged. The source bank's known material errors mean unaudited words stay `reviewed:false`.

## Quarantined

Words held back from teaching modes, with the reason.

- seduce — the decomposition is sound (*sē-* + *dūcō*, "lead astray"), but the main modern sense is sexual, which doesn't suit a kids' game ([Wiktionary](https://en.wiktionary.org/wiki/seduce))
