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

## admission

- Record: `{prefix:"ad-", stem:"mit", suffix:"-ion", literal:"send to", definition:"permission to enter a place"}`
- Review: Confirmed `ad-` + `mit` + `-ion`; replaced the circular "fee charged for admission".
- Reference: Wiktionary, [admission](https://en.wiktionary.org/wiki/admission#English) — borrowed from Latin *admissio*; see *admit*.
- Reference: Wiktionary (Latin), [admissio](https://en.wiktionary.org/wiki/admissio#Latin) — *admissiō* = *admittō* + *-tiō*.

## admit

- Record: `{prefix:"ad-", stem:"mit", suffix:null, literal:"send to", definition:"to let someone in, or to agree that something is true"}`
- Review: Confirmed `ad-` + `mit`; added the common "agree it's true" sense.
- Reference: Wiktionary, [admit](https://en.wiktionary.org/wiki/admit#English) — from Latin *admittō* "to allow entrance" (literally "to send to"), from *ad-* + *mittere* "to send".

## commission

- Record: `{prefix:"con-", stem:"mit", suffix:"-ion", literal:"send with", definition:"a group of people officially given a particular job to do"}`
- Review: Confirmed `con-` + `mit` + `-ion`; simplified the definition.
- Reference: Wiktionary, [commission](https://en.wiktionary.org/wiki/commission#English) — from Latin *commissiō* "sending together; commission", from *committō* + *-tiō*, from *com-* "with" + *mittō* "to send".

## commit

- Record: `{prefix:"con-", stem:"mit", suffix:null, literal:"send with", definition:"to promise yourself to something, or to carry out an act (often a wrong one)"}`
- Review: Confirmed `con-` + `mit`; replaced the obscure "cause to be admitted".
- Reference: Wiktionary, [commit](https://en.wiktionary.org/wiki/commit#English) — from Latin *committō* "to bring together, join, … commit (a wrong), … give in charge", from *com-* "together" + *mittō* "to send".

## commitment

- Record: `{prefix:"con-", stem:"mit", suffix:"-ment", literal:"send with", definition:"a promise to do something, or strong dedication to a cause"}`
- Review: Confirmed as *commit* + *-ment*; simplified the definition.
- Reference: Wiktionary, [commitment](https://en.wiktionary.org/wiki/commitment#English) — from *commit* + *-ment*.
- Reference: Wiktionary (Latin), [committo](https://en.wiktionary.org/wiki/committo#Latin) — *committō* = *con-* + *mittō* "to send".

## dismiss

- Record: `{prefix:"dis-", stem:"mit", suffix:null, literal:"send apart", definition:"to send someone away, or to refuse to take an idea seriously"}`
- Review: Confirmed `dis-` + `mit` (Latin *dī-* is a form of *dis-*); widened the definition.
- Reference: Wiktionary, [dismiss](https://en.wiktionary.org/wiki/dismiss#English) — from Latin *dimissus* "sent away, dismissed", perfect passive participle of *dīmittō* "send away, dismiss", from *dis-* + *mittere* "to send".

## missile

- Record: `{prefix:null, stem:"mit", suffix:"-ile", literal:"send", definition:"an object used as a weapon by being thrown or fired through the air"}`
- Review: Confirmed `mit` + `-ile`; replaced the warhead-specific gloss with the general sense.
- Reference: Wiktionary, [missile](https://en.wiktionary.org/wiki/missile#English) — from Latin *missile* "thrown weapon, projectile", neuter of *missilis* "throwable", from *mittere* "to send".

## mission

- Record: `{prefix:null, stem:"mit", suffix:"-ion", literal:"send", definition:"an important task that someone is sent to do"}`
- Review: Confirmed `mit` + `-ion`; replaced the military-only gloss.
- Reference: Wiktionary, [mission](https://en.wiktionary.org/wiki/mission#English) — from Latin *missiō* "a sending, sending away, dispatching".
- Reference: Wiktionary (Latin), [missio](https://en.wiktionary.org/wiki/missio#Latin) — *missiō* = *mittō* + *-tiō*.

## permission

- Record: `{prefix:"per-", stem:"mit", suffix:"-ion", literal:"send through", definition:"approval to do something"}`
- Review: Confirmed `per-` + `mit` + `-ion`; definition unchanged.
- Reference: Wiktionary, [permission](https://en.wiktionary.org/wiki/permission#English) — from Latin *permissiō*; equivalent to *permit* + *-ion*.
- Reference: Wiktionary (Latin), [permitto](https://en.wiktionary.org/wiki/permitto#Latin) — *permittō* = *per-* + *mittō* "let go, release; send out".

## permit

- Record: `{prefix:"per-", stem:"mit", suffix:null, literal:"send through", definition:"to allow something to happen"}`
- Review: Confirmed `per-` + `mit`. The source definition "large game fish" belonged to an unrelated homonym borrowed from Spanish; replaced it with the verb sense.
- Reference: Wiktionary, [permit](https://en.wiktionary.org/wiki/permit#English) — from Latin *permittō* "give up, allow", from *per* "through" + *mittō* "send".

## promise

- Record: `{prefix:"pro-", stem:"mit", suffix:null, literal:"send forward", definition:"to say that you will definitely do something"}`
- Review: Confirmed `pro-` + `mit`; replaced the circular "make a promise".
- Reference: Wiktionary, [promise](https://en.wiktionary.org/wiki/promise#English) — from Latin *prōmissum* "a promise", past participle of *prōmittō* "to send forth, to say beforehand, to promise", from *pro* "forth" + *mittere* "to send".

## submit

- Record: `{prefix:"sub-", stem:"mit", suffix:null, literal:"send under", definition:"to give in to someone, or to hand in work for approval"}`
- Review: Confirmed `sub-` + `mit`; replaced the terse "put before".
- Reference: Wiktionary, [submit](https://en.wiktionary.org/wiki/submit#English) — from Latin *submittō* "place under, yield", from *sub* "under" + *mitto* "to send".

## transmission

- Record: `{prefix:"trans-", stem:"mit", suffix:"-ion", literal:"send across", definition:"the act of sending something, such as a signal or message, from one place to another"}`
- Review: Confirmed `trans-` + `mit` + `-ion`; widened the definition.
- Reference: Wiktionary, [transmission](https://en.wiktionary.org/wiki/transmission#English) — borrowed from Latin *transmissionem*, from *transmittere*.
- Reference: Wiktionary (Latin), [transmitto](https://en.wiktionary.org/wiki/transmitto#Latin) — *trānsmittō* = *trāns-* + *mittō*.

## transmit

- Record: `{prefix:"trans-", stem:"mit", suffix:null, literal:"send across", definition:"to send or pass something from one person or place to another"}`
- Review: Confirmed `trans-` + `mit`.
- Reference: Wiktionary, [transmit](https://en.wiktionary.org/wiki/transmit#English) — from Latin *trānsmittō* "transmit" (literally "across-send").

## transmitter

- Record: `{prefix:"trans-", stem:"mit", suffix:"-er", literal:"send across", definition:"a device or person that sends out signals or messages"}`
- Review: Confirmed as *transmit* + *-er*.
- Reference: Wiktionary, [transmitter](https://en.wiktionary.org/wiki/transmitter#English) — *transmit* + *-er* (agent noun).

## deposit

- Record: `{prefix:"de-", stem:"pon", suffix:null, literal:"place down", definition:"money put into a bank account, or a layer of material left behind"}`
- Review: Confirmed `de-` + `pon`; replaced the geology-only gloss with the common senses.
- Reference: Wiktionary, [deposit](https://en.wiktionary.org/wiki/deposit#English) — from Latin *depositus*, past participle of *depono* "put down".
- Reference: Wiktionary (Latin), [depono](https://en.wiktionary.org/wiki/depono#Latin) — *dēpōnō* = *dē-* + *pōnō* "place, put".

## disposal

- Record: `{prefix:"dis-", stem:"pon", suffix:"-al", literal:"place apart", definition:"the act of getting rid of something"}`
- Review: Confirmed as *dispose* + *-al*; chose the everyday sense. See the *dispose* caveat.
- Reference: Wiktionary, [disposal](https://en.wiktionary.org/wiki/disposal#English) — *dispose* + *-al*.

## dispose

- Record: `{prefix:"dis-", stem:"pon", suffix:null, literal:"place apart", definition:"to get rid of something (used as “dispose of”)"}`
- Review: Confirmed `dis-` + `pon` with a caveat: the English word came through French *disposer*, whose form was influenced by *poser* (which goes back to Latin *pausāre*), but the French entry gives the source as Latin *dispōnō*.
- Reference: Wiktionary, [dispose](https://en.wiktionary.org/wiki/dispose#English) — borrowed from French *disposer*.
- Reference: Wiktionary (French), [disposer](https://en.wiktionary.org/wiki/disposer#French) — borrowed from Latin *dispōnō*, and influenced by French *poser*.
- Reference: Wiktionary (Latin), [dispono](https://en.wiktionary.org/wiki/dispono#Latin) — *dispōnō* = *dis-* + *pōnō* "place, put".

## expose

- Record: `{prefix:"ex-", stem:"pon", suffix:null, literal:"place out of", definition:"to uncover something or make it visible"}`
- Review: Confirmed `ex-` + `pon` with the *poser* caveat. The source definition described the noun *exposé*; replaced with the verb sense.
- Reference: Wiktionary, [expose](https://en.wiktionary.org/wiki/expose#English) — from Old French *exposer* "to lay open, set forth", from Latin *expōnō* "set forth", with contamination from Old French *poser*.
- Reference: Wiktionary (Latin), [expono](https://en.wiktionary.org/wiki/expono#Latin) — *expōnō* = *ex-* + *pōnō* "to place, put".

## exposure

- Record: `{prefix:"ex-", stem:"pon", suffix:"-ure", literal:"place out of", definition:"the state of being uncovered or unprotected, especially from bad weather"}`
- Review: Confirmed as *expose* + *-ure*.
- Reference: Wiktionary, [exposure](https://en.wiktionary.org/wiki/exposure#English) — *expose* + *-ure* (action noun).

## opponent

- Record: `{prefix:"ob-", stem:"pon", suffix:"-ent", literal:"place against", definition:"a person who competes or argues against another"}`
- Review: Confirmed `ob-` + `pon` + `-ent`.
- Reference: Wiktionary, [opponent](https://en.wiktionary.org/wiki/opponent#English) — from Latin *oppōnēns* "opposing", present active participle of *oppōnō* "to oppose".
- Reference: Wiktionary (Latin), [oppono](https://en.wiktionary.org/wiki/oppono#Latin) — *oppōnō* = *ob-* "against" + *pōnō* "put".

## oppose

- Record: `{prefix:"ob-", stem:"pon", suffix:null, literal:"place against", definition:"to be against something and try to stop it"}`
- Review: Confirmed `ob-` + `pon` with the *poser* caveat; expanded "be against".
- Reference: Wiktionary, [oppose](https://en.wiktionary.org/wiki/oppose#English) — from Old French *opposer*, from Latin *ob* "before, against" + Medieval Latin *pono* "to put", taking the place of *oppono*.

## opposition

- Record: `{prefix:"ob-", stem:"pon", suffix:"-ion", literal:"place against", definition:"the act of being against something; resistance"}`
- Review: Confirmed `ob-` + `pon` + `-ion`.
- Reference: Wiktionary, [opposition](https://en.wiktionary.org/wiki/opposition#English) — from Late Latin *oppositiō*, from the past participle stem of classical *oppōnō* "to set against".

## position

- Record: `{prefix:null, stem:"pon", suffix:"-ion", literal:"place", definition:"the place where someone or something is"}`
- Review: Confirmed `pon` + `-ion`; chose the core "place" sense.
- Reference: Wiktionary, [position](https://en.wiktionary.org/wiki/position#English) — from Latin *positiō* "a putting, position", from *positus* "placed", past participle of *pōnō* "to place".

## positive

- Record: `{prefix:null, stem:"pon", suffix:"-ive", literal:"place", definition:"hopeful and confident, or greater than zero"}`
- Review: Confirmed `pon` + `-ive`; replaced the grammar-only gloss.
- Reference: Wiktionary, [positive](https://en.wiktionary.org/wiki/positive#English) — from Latin *positivus*, from the past participle stem of *ponere* "to place".

## postpone

- Record: `{prefix:"post-", stem:"pon", suffix:null, literal:"place after", definition:"to move an event to a later time"}`
- Review: Confirmed `post-` + `pon`.
- Reference: Wiktionary, [postpone](https://en.wiktionary.org/wiki/postpone#English) — from Latin *postpōnō* "to put after; to postpone", from *post* "after" + *pōnō* "to put; to place".

## proposal

- Record: `{prefix:"pro-", stem:"pon", suffix:"-al", literal:"place forward", definition:"a plan or idea offered for others to consider"}`
- Review: Confirmed as *propose* + *-al*; replaced the marriage-only sense.
- Reference: Wiktionary, [proposal](https://en.wiktionary.org/wiki/proposal#English) — *propose* + *-al*.

## propose

- Record: `{prefix:"pro-", stem:"pon", suffix:null, literal:"place forward", definition:"to suggest a plan or idea"}`
- Review: Confirmed `pro-` + `pon` with the *poser* caveat; replaced the circular definition.
- Reference: Wiktionary, [propose](https://en.wiktionary.org/wiki/propose#English) — from Latin *prōpōnō*, with conjugation altered based on Old French *poser*.
- Reference: Wiktionary (Latin), [propono](https://en.wiktionary.org/wiki/propono#Latin) — *prōpōnō* = *prō-* + *pōnō* "put, place".

## proposition

- Record: `{prefix:"pro-", stem:"pon", suffix:"-ion", literal:"place forward", definition:"an idea or plan offered for consideration"}`
- Review: Confirmed `pro-` + `pon` + `-ion`.
- Reference: Wiktionary, [proposition](https://en.wiktionary.org/wiki/proposition#English) — from Latin *prōpositiō*, from the verb *prōponō*.

## suppose

- Record: `{prefix:"sub-", stem:"pon", suffix:null, literal:"place under", definition:"to think that something is probably true"}`
- Review: Confirmed `sub-` + `pon` with a caveat for reviewers: the English entry describes Old French *supposer* as *sub-* + *poser* "to place", corresponding in meaning to Latin *supponere*; the French entry says *supposer* was borrowed from Latin *suppōnō* and altered based on *poser*.
- Reference: Wiktionary, [suppose](https://en.wiktionary.org/wiki/suppose#English) — from Old French *supposer*, equivalent to *sub-* "under" + *poser* "to place"; corresponding in meaning to Latin *supponere* "to put under".
- Reference: Wiktionary (French), [supposer](https://en.wiktionary.org/wiki/supposer#French) — borrowed from Latin *suppōnō*, altered based on French *poser*.
- Reference: Wiktionary (Latin), [suppono](https://en.wiktionary.org/wiki/suppono#Latin) — *suppōnō* = *sub-* "under" + *pōnō* "put, place".

## attention

- Record: `{prefix:"ad-", stem:"tend", suffix:"-ion", literal:"stretch to", definition:"the act of focusing your mind on something"}`
- Review: Corrected the stem from `ten` (hold) to `tend` (stretch): *attention* comes from *attendō* = *ad-* + *tendō*. Literal changed from "hold to" to "stretch to".
- Reference: Wiktionary, [attention](https://en.wiktionary.org/wiki/attention#English) — from Latin *attentio*, from *attendo* "to attend, give heed to"; equivalent to *attend* + *-tion*.
- Reference: Wiktionary (Latin), [attendo](https://en.wiktionary.org/wiki/attendo#Latin) — *attendō* = *ad-* + *tendō* "stretch, extend".

## contain

- Record: `{prefix:"con-", stem:"ten", suffix:null, literal:"hold with", definition:"to hold something inside"}`
- Review: Confirmed `con-` + `ten`; replaced the circular "contain or hold".
- Reference: Wiktionary, [contain](https://en.wiktionary.org/wiki/contain#English) — from Latin *continēre* "to hold or keep together, comprise, contain", combined form of *con-* "together" + *teneō* "to hold".

## content

- Record: `{prefix:"con-", stem:"ten", suffix:null, literal:"hold with", definition:"satisfied and happy with what you have"}`
- Review: Confirmed `con-` + `ten`. Chose the adjective sense ("satisfied"), the first sense in the source; replaced the garbled gloss.
- Reference: Wiktionary, [content](https://en.wiktionary.org/wiki/content#English) — from Latin *contentus* "contained; satisfied", past participle of *continēre* "to contain".

## continent

- Record: `{prefix:"con-", stem:"ten", suffix:"-ent", literal:"hold with", definition:"one of the large landmasses of the Earth, such as Africa or Asia"}`
- Review: Confirmed `con-` + `ten` + `-ent`; replaced "the European mainland" with the general sense.
- Reference: Wiktionary, [continent](https://en.wiktionary.org/wiki/continent#English) — from Latin *continens*, noun use of present participle of *contineo* "to contain"; also *continentem* "continuous; holding together".
- Reference: Wiktionary (Latin), [contineo](https://en.wiktionary.org/wiki/contineo#Latin) — *contineō* = *con-* "together" + *teneō* "to hold".

## detention

- Record: `{prefix:"de-", stem:"ten", suffix:"-ion", literal:"hold down", definition:"the state of being kept somewhere and not allowed to leave"}`
- Review: Confirmed `de-` + `ten` + `-ion`.
- Reference: Wiktionary, [detention](https://en.wiktionary.org/wiki/detention#English) — from Latin *detentio*; equivalent to *detain* + *-tion*.
- Reference: Wiktionary (Latin), [detentio](https://en.wiktionary.org/wiki/detentio#Latin) — *dētentiō* = *dētineō* + *-tiō*.
- Reference: Wiktionary (Latin), [detineo](https://en.wiktionary.org/wiki/detineo#Latin) — *dētineō* = *dē-* + *teneō* "hold; restrain".

## extension

- Record: `{prefix:"ex-", stem:"tend", suffix:"-ion", literal:"stretch out of", definition:"the act of making something longer or larger, or an added part"}`
- Review: Corrected the stem from `ten` to `tend`: Latin *extēnsiō* comes from *extendō* = *ex-* + *tendō* "stretch".
- Reference: Wiktionary, [extension](https://en.wiktionary.org/wiki/extension#English) — from Latin *extensiō*; the act of extending, a stretching out.
- Reference: Wiktionary (Latin), [extensio](https://en.wiktionary.org/wiki/extensio#Latin) — *extēnsiō* = *extendō* + *-tiō*.

## extensive

- Record: `{prefix:"ex-", stem:"tend", suffix:"-ive", literal:"stretch out of", definition:"covering a large area or amount"}`
- Review: Corrected the stem from `ten` to `tend` (via *extēnsus*, "stretched out"); replaced the agriculture-only gloss.
- Reference: Wiktionary, [extensive](https://en.wiktionary.org/wiki/extensive#English) — from Late Latin *extensīvus*, from Latin *extensus*.
- Reference: Wiktionary (Latin), [extensivus](https://en.wiktionary.org/wiki/extensivus#Latin) — *extēnsīvus* = *extēnsus* "stretched out; extended" + *-īvus*.

## extent

- Record: `{prefix:"ex-", stem:"tend", suffix:null, literal:"stretch out of", definition:"how far something reaches, or how large or important it is"}`
- Review: Corrected the stem from `ten` to `tend`: *extent* comes from *extendere*, "extend".
- Reference: Wiktionary, [extent](https://en.wiktionary.org/wiki/extent#English) — from Old French *estente* "stretch of land", from *estendre*/*extendre* "extend" (or from Latin *extentus*), from Latin *extendere*.
- Reference: Wiktionary (Latin), [extendo](https://en.wiktionary.org/wiki/extendo#Latin) — *extendō* = *ex-* + *tendō* "stretch".

## intent

- Record: `{prefix:"in-", stem:"tend", suffix:null, literal:"stretch into", definition:"what someone means or plans to do"}`
- Review: Corrected the stem from `ten` to `tend`: Latin *intentus* is the perfect passive participle of *intendō* = *in-* + *tendō*.
- Reference: Wiktionary, [intent](https://en.wiktionary.org/wiki/intent#English) — ultimately from Latin *intentus*; spelling later modified to align with the Latin word.
- Reference: Wiktionary (Latin), [intentus](https://en.wiktionary.org/wiki/intentus#Latin) — perfect passive participle of *intendō*.

## intention

- Record: `{prefix:"in-", stem:"tend", suffix:"-ion", literal:"stretch into", definition:"something you plan or mean to do"}`
- Review: Corrected the stem from `ten` to `tend`; replaced the circular "an act of intending".
- Reference: Wiktionary, [intention](https://en.wiktionary.org/wiki/intention#English) — from Latin *intentio*; equivalent to *intent* + *-ion*.
- Reference: Wiktionary (Latin), [intendo](https://en.wiktionary.org/wiki/intendo#Latin) — *intendō* = *in-* + *tendō*.

## obtain

- Record: `{prefix:"ob-", stem:"ten", suffix:null, literal:"hold against", definition:"to get something, often with effort"}`
- Review: Confirmed `ob-` + `ten`.
- Reference: Wiktionary, [obtain](https://en.wiktionary.org/wiki/obtain#English) — from Latin *obtinēre* "to gain, achieve, succeed, possess", from *ob-* + *tenēre* "to hold".

## sustain

- Record: `{prefix:"sub-", stem:"ten", suffix:null, literal:"hold under", definition:"to keep something going over time"}`
- Review: Confirmed `sub-` + `ten`; chose the core "keep in existence" sense over "provide with nourishment".
- Reference: Wiktionary, [sustain](https://en.wiktionary.org/wiki/sustain#English) — from Latin *sustineō* "to uphold", from *sub-* "from below, up" + *teneō* "hold".

## tenant

- Record: `{prefix:null, stem:"ten", suffix:"-ant", literal:"hold", definition:"a person who rents a home or building from its owner"}`
- Review: Confirmed `ten` + `-ant`; replaced the vague "any occupant".
- Reference: Wiktionary, [tenant](https://en.wiktionary.org/wiki/tenant#English) — from Old French *tenant*, present participle of *tenir* "to hold", from Latin *teneō* "hold, keep".

## tension

- Record: `{prefix:null, stem:"tend", suffix:"-ion", literal:"stretch", definition:"the state of being stretched tight, or a nervous, uneasy feeling"}`
- Review: Corrected the stem from `ten` to `tend`: Latin *tēnsiō* comes from *tendō* "to stretch".
- Reference: Wiktionary, [tension](https://en.wiktionary.org/wiki/tension#English) — borrowed from Middle French *tension*, from Latin *tēnsiō*.
- Reference: Wiktionary (Latin), [tensio](https://en.wiktionary.org/wiki/tensio#Latin) — *tēnsiō* = *tendō* "to stretch, stretch out, distend, extend" + *-tiō*.

## access

- Record: `{prefix:"ad-", stem:"ced", suffix:null, literal:"go to", definition:"a way of getting into a place, or the right to use something"}`
- Review: Confirmed `ad-` + `ced`; widened the definition.
- Reference: Wiktionary, [access](https://en.wiktionary.org/wiki/access#English) — from Latin *accessus*, perfect passive participle of *accēdō* "approach", from *ad* "to, toward" + *cēdō* "move, yield".

## accessory

- Record: `{prefix:"ad-", stem:"ced", suffix:"-ory", literal:"go to", definition:"an extra item that goes with something, such as a belt or a phone case"}`
- Review: Confirmed `ad-` + `ced` + `-ory`. Chose the everyday "additional item" sense over the crime-helper sense, which is less suited to young learners.
- Reference: Wiktionary, [accessory](https://en.wiktionary.org/wiki/accessory#English) — from Medieval Latin *accessōrius*, from Latin *accessor* "helper, subordinate", from *accessus*.
- Reference: Wiktionary (Latin), [accessor](https://en.wiktionary.org/wiki/accessor#Latin) — *accessor* = *accēdō* + *-tor*.

## excess

- Record: `{prefix:"ex-", stem:"ced", suffix:null, literal:"go out of", definition:"more than is needed or allowed"}`
- Review: Confirmed `ex-` + `ced`; simplified the definition.
- Reference: Wiktionary, [excess](https://en.wiktionary.org/wiki/excess#English) — from Latin *excessus* "a going out", from *excedere* "to go out, go beyond".
- Reference: Wiktionary (Latin), [excedo](https://en.wiktionary.org/wiki/excedo#Latin) — *excēdō* = *ex-* "out of, from" + *cēdō* "withdraw; yield".

## excessive

- Record: `{prefix:"ex-", stem:"ced", suffix:"-ive", literal:"go out of", definition:"more than is normal, necessary, or reasonable"}`
- Review: Confirmed as *excess* + *-ive*.
- Reference: Wiktionary, [excessive](https://en.wiktionary.org/wiki/excessive#English) — from Medieval Latin *excessivus*, equivalent to *excess* + *-ive*.

## procedure

- Record: `{prefix:"pro-", stem:"ced", suffix:"-ure", literal:"go forward", definition:"a set of steps for doing something"}`
- Review: Confirmed `pro-` + `ced` + `-ure`; replaced the computer-programming gloss.
- Reference: Wiktionary, [procedure](https://en.wiktionary.org/wiki/procedure#English) — from French *procédure*, from Latin *procedere* "to go forward, proceed".

## proceed

- Record: `{prefix:"pro-", stem:"ced", suffix:null, literal:"go forward", definition:"to go forward or continue"}`
- Review: Confirmed `pro-` + `ced`.
- Reference: Wiktionary, [proceed](https://en.wiktionary.org/wiki/proceed#English) — from Latin *prōcēdō* "to go forth, go forward, advance", from *prō* "forth" + *cēdō* "to go".

## process

- Record: `{prefix:"pro-", stem:"ced", suffix:null, literal:"go forward", definition:"a series of steps or events that lead to a result"}`
- Review: Confirmed `pro-` + `ced`; replaced the legal "writ" sense.
- Reference: Wiktionary, [process](https://en.wiktionary.org/wiki/process#English) — from Latin *prōcessus* "course, progression", nominalization of *prōcēdō* "proceed, advance".

## procession

- Record: `{prefix:"pro-", stem:"ced", suffix:"-ion", literal:"go forward", definition:"a line of people or vehicles moving forward in an orderly way"}`
- Review: Confirmed `pro-` + `ced` + `-ion`; chose the parade sense learners know.
- Reference: Wiktionary, [procession](https://en.wiktionary.org/wiki/procession#English) — from Latin *prōcessiō* "a marching forward, an advance", from *prōcēdere* "to move forward, advance, proceed".

## recess

- Record: `{prefix:"re-", stem:"ced", suffix:null, literal:"go back", definition:"a short break from work or school"}`
- Review: Confirmed `re-` + `ced`; chose the school-break sense over "a small concavity".
- Reference: Wiktionary, [recess](https://en.wiktionary.org/wiki/recess#English) — from Latin *recessus* "act of going back, … retreat, withdrawal", from *recēdō* "to go back, recede, retire, withdraw".
- Reference: Wiktionary (Latin), [recedo](https://en.wiktionary.org/wiki/recedo#Latin) — *recēdō* = *re-* "back" + *cēdō* "to be in motion, go, move".

## succeed

- Record: `{prefix:"sub-", stem:"ced", suffix:null, literal:"go under", definition:"to manage to do what you were trying to do"}`
- Review: Confirmed `sub-` + `ced`; chose the common "achieve" sense (the source gloss was "be the successor of").
- Reference: Wiktionary, [succeed](https://en.wiktionary.org/wiki/succeed#English) — from Latin *succedo* "to go under, … follow, take the place of, … prosper, be successful".
- Reference: Wiktionary (Latin), [succedo](https://en.wiktionary.org/wiki/succedo#Latin) — *succēdō* = *sub-* + *cēdō* "go".

## success

- Record: `{prefix:"sub-", stem:"ced", suffix:null, literal:"go under", definition:"reaching a goal or getting the result you wanted"}`
- Review: Confirmed `sub-` + `ced`.
- Reference: Wiktionary, [success](https://en.wiktionary.org/wiki/success#English) — from Latin *successus*, from *succēdō* "succeed", from *sub-* "next to" + *cēdō* "go, move".

## successor

- Record: `{prefix:"sub-", stem:"ced", suffix:"-or", literal:"go under", definition:"a person or thing that comes next and takes another's place"}`
- Review: Confirmed `sub-` + `ced` + `-or`.
- Reference: Wiktionary, [successor](https://en.wiktionary.org/wiki/successor#English) — from Anglo-Norman *successour*, from Latin *successor*.
- Reference: Wiktionary (Latin), [successor](https://en.wiktionary.org/wiki/successor#Latin) — *successor* = *succēdō* + *-tor*.

## commotion

- Record: `{prefix:"con-", stem:"mot", suffix:"-ion", literal:"move with", definition:"a noisy, confused disturbance"}`
- Review: Confirmed `con-` + `mot` + `-ion`.
- Reference: Wiktionary, [commotion](https://en.wiktionary.org/wiki/commotion#English) — from Latin *commōtiō*, from *commoveō* + *-tiō*.
- Reference: Wiktionary (Latin), [commoveo](https://en.wiktionary.org/wiki/commoveo#Latin) — *commoveō* = *con-* + *moveō*.

## emotion

- Record: `{prefix:"ex-", stem:"mot", suffix:"-ion", literal:"move out of", definition:"a strong feeling, such as joy, anger, or fear"}`
- Review: Confirmed `ex-` + `mot` + `-ion` (Latin *ē-* is a variant of *ex-*).
- Reference: Wiktionary, [emotion](https://en.wiktionary.org/wiki/emotion#English) — from French *émouvoir* "excite", based on Latin *ēmōtus*, past participle of *ēmoveō* "to move out, move away, remove, stir up", from *ē-* "out" (variant of *ex-*) and *moveō* "move".

## motion

- Record: `{prefix:null, stem:"mot", suffix:"-ion", literal:"move", definition:"the act or process of moving"}`
- Review: Confirmed `mot` + `-ion`; replaced the philosophy-style gloss.
- Reference: Wiktionary, [motion](https://en.wiktionary.org/wiki/motion#English) — from Latin *mōtiō* "movement, motion", related to *movēre*.
- Reference: Wiktionary (Latin), [motio](https://en.wiktionary.org/wiki/motio#Latin) — *mōtiō* = *moveō* + *-tiō*.

## motive

- Record: `{prefix:null, stem:"mot", suffix:"-ive", literal:"move", definition:"a reason for doing something"}`
- Review: Confirmed `mot` + `-ive`; replaced the specialized musical sense with the common reason-for-action sense.
- Reference: Wiktionary, [motive](https://en.wiktionary.org/wiki/motive#English) — from Late Latin *motivum* "motive, moving cause", neuter of *motivus*.
- Reference: Wiktionary (Latin), [motus](https://en.wiktionary.org/wiki/motus#Latin) — *mōtus*: perfect passive participle of *moveō* "to move".
- Reference: Wiktionary (Latin), [motivus](https://en.wiktionary.org/wiki/motivus#Latin) — *mōtīvus* = *mōtus* (participle) + *-īvus*.

## motor

- Record: `{prefix:null, stem:"mot", suffix:"-or", literal:"move", definition:"a machine that makes something move or run"}`
- Review: Confirmed `mot` + `-or`; replaced the verb gloss "travel in a vehicle" with the noun sense.
- Reference: Wiktionary, [motor](https://en.wiktionary.org/wiki/motor#English) — from Latin *mōtor* "mover; that which moves something".
- Reference: Wiktionary (Latin), [motor](https://en.wiktionary.org/wiki/motor#Latin) — *mōtor* = *moveō* "to move" + *-tor* "-er".

## movement

- Record: `{prefix:null, stem:"mot", suffix:"-ment", literal:"move", definition:"the act of moving from one place or position to another"}`
- Review: Confirmed as the *moveō* family (`mot`) + `-ment`, via Old French *movoir*.
- Reference: Wiktionary, [movement](https://en.wiktionary.org/wiki/movement#English) — from Old French *movement*, from *movoir* + *-ment*; compare Medieval Latin *movimentum*, from Latin *movere* "move"; morphologically *move* + *-ment*.

## promote

- Record: `{prefix:"pro-", stem:"mot", suffix:null, literal:"move forward", definition:"to move someone up to a higher rank, or to help something become popular"}`
- Review: Confirmed `pro-` + `mot`; widened the definition.
- Reference: Wiktionary, [promote](https://en.wiktionary.org/wiki/promote#English) — from Latin *prōmōtus*, perfect passive participle of *prōmoveō* "move forward, advance".
- Reference: Wiktionary (Latin), [promoveo](https://en.wiktionary.org/wiki/promoveo#Latin) — *prōmoveō* = *prō-* + *moveō* "move".

## promotion

- Record: `{prefix:"pro-", stem:"mot", suffix:"-ion", literal:"move forward", definition:"a move up to a higher rank or job"}`
- Review: Confirmed `pro-` + `mot` + `-ion`.
- Reference: Wiktionary, [promotion](https://en.wiktionary.org/wiki/promotion#English) — from Late Latin *prōmotiō*, from *prōmoveō* "to move forward"; equivalent to *promote* + *-ion*.

## remote

- Record: `{prefix:"re-", stem:"mot", suffix:null, literal:"move back", definition:"far away or hard to reach"}`
- Review: Confirmed `re-` + `mot`; replaced "very unlikely" with the core sense.
- Reference: Wiktionary, [remote](https://en.wiktionary.org/wiki/remote#English) — from Latin *remotus*, past participle of *removere* "to remove", from *re-* + *movere* "to move".

## removal

- Record: `{prefix:"re-", stem:"mot", suffix:"-al", literal:"move back", definition:"the act of taking something away"}`
- Review: Confirmed as *remove* + *-al*.
- Reference: Wiktionary, [removal](https://en.wiktionary.org/wiki/removal#English) — *remove* + *-al*.

## remove

- Record: `{prefix:"re-", stem:"mot", suffix:null, literal:"move back", definition:"to take something away from a place"}`
- Review: Confirmed `re-` + `mot`; replaced the office-specific gloss.
- Reference: Wiktionary, [remove](https://en.wiktionary.org/wiki/remove#English) — from Latin *removeo*, from *re-* + *moveo* "to move", equivalent to *re-* + *move*.

## formal

- Record: `{prefix:null, stem:"form", suffix:"-al", literal:"shape", definition:"following official rules or customs; not casual"}`
- Review: Confirmed `form` + `-al`; replaced the "evening gown" noun sense.
- Reference: Wiktionary, [formal](https://en.wiktionary.org/wiki/formal#English) — from Latin *fōrmālis*, from *fōrma* "form"; equivalent to *form* + *-al*.

## formation

- Record: `{prefix:null, stem:"form", suffix:"-ion", literal:"shape", definition:"the act of forming or establishing something"}`
- Review: Confirmed `form` + `-ion`; definition unchanged.
- Reference: Wiktionary, [formation](https://en.wiktionary.org/wiki/formation#English) — from Latin *fōrmātiō*, from *fōrmō* "form".
- Reference: Wiktionary (Latin), [formo](https://en.wiktionary.org/wiki/formo#Latin) — *fōrmō*: from *fōrma* "form".

## inform

- Record: `{prefix:"in-", stem:"form", suffix:null, literal:"shape into", definition:"to give someone facts or information"}`
- Review: Confirmed `in-` + `form`; replaced "act as an informer".
- Reference: Wiktionary, [inform](https://en.wiktionary.org/wiki/inform#English) — from Latin *īnfōrmō* "to shape, form, train, instruct, educate", from *in-* "into" + *fōrma* "form, shape".

## informant

- Record: `{prefix:"in-", stem:"form", suffix:"-ant", literal:"shape into", definition:"a person who supplies information"}`
- Review: Confirmed as *inform* + *-ant*; definition unchanged.
- Reference: Wiktionary, [informant](https://en.wiktionary.org/wiki/informant#English) — *inform* + *-ant*.

## information

- Record: `{prefix:"in-", stem:"form", suffix:"-ion", literal:"shape into", definition:"facts or knowledge about something"}`
- Review: Confirmed `in-` + `form` + `-ion`; replaced the legal "accusation" sense.
- Reference: Wiktionary, [information](https://en.wiktionary.org/wiki/information#English) — from Latin *īnfōrmātiō* "formation, conception; education", from the participle stem of *īnformāre* "to inform".

## reform

- Record: `{prefix:"re-", stem:"form", suffix:null, literal:"shape back", definition:"to change something in order to improve it"}`
- Review: Confirmed `re-` + `form`.
- Reference: Wiktionary, [reform](https://en.wiktionary.org/wiki/reform#English) — from Latin *reformo*, *reformare*.
- Reference: Wiktionary (Latin), [reformo](https://en.wiktionary.org/wiki/reformo#Latin) — *refōrmō* = *re-* + *fōrmō*.

## transform

- Record: `{prefix:"trans-", stem:"form", suffix:null, literal:"shape across", definition:"to change something completely in form or appearance"}`
- Review: Confirmed `trans-` + `form`.
- Reference: Wiktionary, [transform](https://en.wiktionary.org/wiki/transform#English) — from Latin *transformo*, from *trans* "across" + *forma* "form".

## transformation

- Record: `{prefix:"trans-", stem:"form", suffix:"-ion", literal:"shape across", definition:"a complete change in form or appearance"}`
- Review: Confirmed `trans-` + `form` + `-ion`.
- Reference: Wiktionary, [transformation](https://en.wiktionary.org/wiki/transformation#English) — from Ecclesiastical Latin *trānsfōrmātiō*; morphologically *transform* + *-ation*.

## importance

- Record: `{prefix:"in-", stem:"port", suffix:"-ance", literal:"carry into", definition:"the quality of mattering a lot"}`
- Review: Confirmed `in-` + `port` + `-ance` (*import* "to be important" + *-ance*).
- Reference: Wiktionary, [importance](https://en.wiktionary.org/wiki/importance#English) — from Medieval Latin *importantia*; *import* "to be important" + *-ance*.
- Reference: Wiktionary (Latin), [importo](https://en.wiktionary.org/wiki/importo#Latin) — *importō* = *in-* "in, into" + *portō* "carry, bear; convey".

## important

- Record: `{prefix:"in-", stem:"port", suffix:"-ant", literal:"carry into", definition:"having great value or effect; mattering a lot"}`
- Review: Confirmed `in-` + `port` + `-ant`; replaced the circular "of extreme importance".
- Reference: Wiktionary, [important](https://en.wiktionary.org/wiki/important#English) — from Medieval Latin *importāns*; *import* "to be important" + *-ant*.
- Reference: Wiktionary (Latin), [importo](https://en.wiktionary.org/wiki/importo#Latin) — *importō* = *in-* "in, into" + *portō* "carry, bear; convey".

## portable

- Record: `{prefix:null, stem:"port", suffix:"-able", literal:"carry", definition:"light and easy to carry"}`
- Review: Confirmed `port` + `-able`; replaced "a small light typewriter".
- Reference: Wiktionary, [portable](https://en.wiktionary.org/wiki/portable#English) — from Latin *portābilis*; *port* "to carry" + *-able*.
- Reference: Wiktionary (Latin), [portabilis](https://en.wiktionary.org/wiki/portabilis#Latin) — *portābilis* = *portō* "to carry, convey" + *-bilis*.

## porter

- Record: `{prefix:null, stem:"port", suffix:"-er", literal:"carry", definition:"a person whose job is to carry bags or luggage"}`
- Review: Confirmed `port` + `-er` for the carrier sense. The source definition ("someone who guards an entrance") belongs to a separate *porter* from Latin *portarius* "gatekeeper", which does not fit the `port` = carry family; replaced it.
- Reference: Wiktionary, [porter](https://en.wiktionary.org/wiki/porter#English) — from Late Latin *portātor*, from the past participle of *portō*, *portāre* "to carry"; *port* "to carry" + *-er*.

## report

- Record: `{prefix:"re-", stem:"port", suffix:null, literal:"carry back", definition:"a spoken or written account of something"}`
- Review: Confirmed `re-` + `port`.
- Reference: Wiktionary, [report](https://en.wiktionary.org/wiki/report#English) — from Latin *reporto*, *reportāre* "to carry back, return, remit, refer", from *re-* + *portāre*.

## reporter

- Record: `{prefix:"re-", stem:"port", suffix:"-er", literal:"carry back", definition:"a person who gathers and reports news"}`
- Review: Confirmed as *report* + *-er*.
- Reference: Wiktionary, [reporter](https://en.wiktionary.org/wiki/reporter#English) — from Old French *reporteur*; equivalent to *report* + *-er*.

## support

- Record: `{prefix:"sub-", stem:"port", suffix:null, literal:"carry under", definition:"to help someone, or to hold something up"}`
- Review: Confirmed `sub-` + `port`.
- Reference: Wiktionary, [support](https://en.wiktionary.org/wiki/support#English) — from Old French *supporter*, from Latin *supportō*.
- Reference: Wiktionary (Latin), [supporto](https://en.wiktionary.org/wiki/supporto#Latin) — *supportō* = *sub-* "under" + *portō* "to carry".

## supportive

- Record: `{prefix:"sub-", stem:"port", suffix:"-ive", literal:"carry under", definition:"giving help and encouragement"}`
- Review: Confirmed as *support* + *-ive*.
- Reference: Wiktionary, [supportive](https://en.wiktionary.org/wiki/supportive#English) — *support* + *-ive*.

## transport

- Record: `{prefix:"trans-", stem:"port", suffix:null, literal:"carry across", definition:"to carry people or goods from one place to another"}`
- Review: Confirmed `trans-` + `port`; chose the verb sense.
- Reference: Wiktionary, [transport](https://en.wiktionary.org/wiki/transport#English) — from Latin *trānsportō* "to carry over, take across", from *trāns-* "across" + *portō* "to bear, carry, convey".

## transportation

- Record: `{prefix:"trans-", stem:"port", suffix:"-ion", literal:"carry across", definition:"a way of carrying people or goods from place to place"}`
- Review: Confirmed as *transport* + *-ation*; replaced "the sum charged for riding".
- Reference: Wiktionary, [transportation](https://en.wiktionary.org/wiki/transportation#English) — *transport* + *-ation*.

## transporter

- Record: `{prefix:"trans-", stem:"port", suffix:"-er", literal:"carry across", definition:"a vehicle or machine that carries things from place to place"}`
- Review: Confirmed as *transport* + *-er*; generalized the car-truck gloss.
- Reference: Wiktionary, [transporter](https://en.wiktionary.org/wiki/transporter#English) — *transport* + *-er* (agent noun), attested 1535.

## circumstance

- Record: `{prefix:"circum-", stem:"stat", suffix:null, literal:"stand around", definition:"a fact or condition that affects a situation"}`
- Review: Confirmed `circum-` + `stat` via *circumstāns* "surrounding".
- Reference: Wiktionary, [circumstance](https://en.wiktionary.org/wiki/circumstance#English) — from Old French *circonstance*, from Latin *circumstantia*.
- Reference: Wiktionary (Latin), [circumstantia](https://en.wiktionary.org/wiki/circumstantia#Latin) — *circumstantia*: from *circumstāns* "surrounding; encircling".
- Reference: Wiktionary (Latin), [circumsto](https://en.wiktionary.org/wiki/circumsto#Latin) — *circumstō* = *circum-* "round; about" + *stō* "to stand".

## constant

- Record: `{prefix:"con-", stem:"stat", suffix:null, literal:"stand with", definition:"staying the same; not changing"}`
- Review: Confirmed `con-` + `stat`.
- Reference: Wiktionary, [constant](https://en.wiktionary.org/wiki/constant#English) — from Latin *constans*, from *consto*, *cōnstāre* "to stand firm".
- Reference: Wiktionary (Latin), [consto](https://en.wiktionary.org/wiki/consto#Latin) — *cōnstō* = *con-* "together" + *stō* "stand".

## constitution

- Record: `{prefix:"con-", stem:"stat", suffix:"-ion", literal:"stand with", definition:"the basic laws and principles of a country or organization"}`
- Review: Confirmed `con-` + `stat` + `-ion` with a caveat: Latin *cōnstituō* is *con-* + *statuō* "set up, establish", a causative relative of *stāre*, not *stō* itself. Replaced the generic "act of forming" gloss.
- Reference: Wiktionary, [constitution](https://en.wiktionary.org/wiki/constitution#English) — a learned borrowing from Latin *cōnstitūtiō*.
- Reference: Wiktionary (Latin), [constituo](https://en.wiktionary.org/wiki/constituo#Latin) — *cōnstituō* = *con-* "with" + *statuō* "set up; establish".

## estate

- Record: `{prefix:null, stem:"stat", suffix:null, literal:"stand", definition:"a large piece of land with a house on it, or everything a person owns"}`
- Review: Corrected the decomposition: the initial *e-* comes from the French spelling *estat* (from Latin *status*), not from the prefix *ex-*. Changed to `stat` alone with literal "stand".
- Reference: Wiktionary, [estate](https://en.wiktionary.org/wiki/estate#English) — from Old French *estat* (French *état*), from Latin *status*; doublet of *state*, *status*.
- Reference: Wiktionary, [state](https://en.wiktionary.org/wiki/state#English) — from Old French *estat* and Latin *stātus* "manner of standing, attitude, position", from *stō*, *stāre* "to stand".

## instance

- Record: `{prefix:"in-", stem:"stat", suffix:null, literal:"stand near", definition:"an example or single occurrence of something"}`
- Review: Confirmed `in-` + `stat` via *īnstāns*. Literal changed from "stand into" to "stand near", following the English *instant* entry; here *in-* means "on, near" (the Latin *insto* entry glosses it "after", i.e. "stand behind"), not "into" or "not".
- Reference: Wiktionary, [instance](https://en.wiktionary.org/wiki/instance#English) — from Latin *īnstantia* "a being near, presence", from *īnstāns* "urgent"; see *instant*.
- Reference: Wiktionary (Latin), [insto](https://en.wiktionary.org/wiki/insto#Latin) — *īnstō* = *in-* + *stō* "to stand".

## instant

- Record: `{prefix:"in-", stem:"stat", suffix:null, literal:"stand near", definition:"happening right away; also, a very short moment"}`
- Review: Confirmed `in-` + `stat`. Literal changed from "stand into" to "stand near", matching the source's literal gloss "standing near"; here *in-* means "on, near" (the Latin *insto* entry glosses it "after"), not "into" or "not".
- Reference: Wiktionary, [instant](https://en.wiktionary.org/wiki/instant#English) — from Latin *īnstāns* "present, pressing, urgent" (literally "standing near"), present active participle of *īnstō*.
- Reference: Wiktionary (Latin), [insto](https://en.wiktionary.org/wiki/insto#Latin) — *īnstō* = *in-* + *stō* "to stand".

## institution

- Record: `{prefix:"in-", stem:"stat", suffix:"-ion", literal:"stand into", definition:"an established organization, such as a school, bank, or hospital"}`
- Review: Confirmed `in-` + `stat` + `-ion` with the same *statuō* caveat as *constitution*.
- Reference: Wiktionary, [institution](https://en.wiktionary.org/wiki/institution#English) — from Latin *institūtiō*, from *instituō* "to set up", from *in-* "in, on" + *statuō* "to set up, establish".

## statement

- Record: `{prefix:null, stem:"stat", suffix:"-ment", literal:"stand", definition:"something that someone says or writes officially"}`
- Review: Confirmed as *state* + *-ment*; *state* comes from Latin *stātus*, from *stāre*.
- Reference: Wiktionary, [statement](https://en.wiktionary.org/wiki/statement#English) — *state* + *-ment*.
- Reference: Wiktionary, [state](https://en.wiktionary.org/wiki/state#English) — from Latin *stātus* "manner of standing, attitude, position", from *stō*, *stāre* "to stand".

## station

- Record: `{prefix:null, stem:"stat", suffix:"-ion", literal:"stand", definition:"a stopping place for trains or buses, or a building used for a particular service"}`
- Review: Confirmed `stat` + `-ion`; replaced the "social situation" gloss.
- Reference: Wiktionary, [station](https://en.wiktionary.org/wiki/station#English) — from Latin *statiōnem*, accusative of *statiō* "standing, post, job, position".
- Reference: Wiktionary (Latin), [statio](https://en.wiktionary.org/wiki/statio#Latin) — *statiō* = *stō* "to stand" + *-tiō*.

## substance

- Record: `{prefix:"sub-", stem:"stat", suffix:null, literal:"stand under", definition:"a particular kind of matter or material"}`
- Review: Confirmed `sub-` + `stat`; replaced "the idea that is intended".
- Reference: Wiktionary, [substance](https://en.wiktionary.org/wiki/substance#English) — from Latin *substantia* "substance, essence", from *substāns*, present active participle of *substō* "exist" (literally "stand under"), from *sub* + *stō* "stand".

## adventure

- Record: `{prefix:"ad-", stem:"ven", suffix:"-ure", literal:"come to", definition:"an exciting or unusual experience"}`
- Review: Confirmed `ad-` + `ven` + `-ure`; replaced the verb gloss "put at risk".
- Reference: Wiktionary, [adventure](https://en.wiktionary.org/wiki/adventure#English) — from Vulgar Latin *\*adventūra*, from Latin *adventūrus* "about to arrive", future active participle of *adveniō* "to arrive".
- Reference: Wiktionary (Latin), [advenio](https://en.wiktionary.org/wiki/advenio#Latin) — *adveniō* = *ad-* "toward" + *veniō* "come".

## convent

- Record: `{prefix:"con-", stem:"ven", suffix:null, literal:"come with", definition:"a building where nuns live and work together"}`
- Review: Confirmed `con-` + `ven`.
- Reference: Wiktionary, [convent](https://en.wiktionary.org/wiki/convent#English) — from Latin *conventus*, perfect participle of *convenio*; see *con-* + *venio*.

## convention

- Record: `{prefix:"con-", stem:"ven", suffix:"-ion", literal:"come with", definition:"a large formal meeting of people who share an interest"}`
- Review: Confirmed `con-` + `ven` + `-ion`.
- Reference: Wiktionary, [convention](https://en.wiktionary.org/wiki/convention#English) — from Latin *conventiō* "meeting, assembling; agreement", from *conveniō* "come, gather or meet together", from *con-* "with, together" + *veniō* "come".

## event

- Record: `{prefix:"ex-", stem:"ven", suffix:null, literal:"come out of", definition:"something that happens, especially something important"}`
- Review: Confirmed `ex-` + `ven` (Latin *ē-* is a short form of *ex*).
- Reference: Wiktionary, [event](https://en.wiktionary.org/wiki/event#English) — from Latin *ēventus* "an event, occurrence", from *ēveniō* "to happen, … to come out", from *ē* "out of, from", short form of *ex* + *veniō* "come".

## intervene

- Record: `{prefix:"inter-", stem:"ven", suffix:null, literal:"come between", definition:"to step in to change what is happening"}`
- Review: Confirmed `inter-` + `ven`.
- Reference: Wiktionary, [intervene](https://en.wiktionary.org/wiki/intervene#English) — back-formation from *intervention*, and/or from Latin *interveniō* "come between".
- Reference: Wiktionary (Latin), [intervenio](https://en.wiktionary.org/wiki/intervenio#Latin) — *interveniō* = *inter-* "between" + *veniō* "come".

## intervention

- Record: `{prefix:"inter-", stem:"ven", suffix:"-ion", literal:"come between", definition:"the act of stepping in to change what is happening"}`
- Review: Confirmed `inter-` + `ven` + `-ion`.
- Reference: Wiktionary, [intervention](https://en.wiktionary.org/wiki/intervention#English) — from Latin *interventiō*; morphologically *intervene* + *-tion*.

## invent

- Record: `{prefix:"in-", stem:"ven", suffix:null, literal:"come into", definition:"to create something new that did not exist before"}`
- Review: Confirmed `in-` + `ven`; replaced the "make up something untrue" sense.
- Reference: Wiktionary, [invent](https://en.wiktionary.org/wiki/invent#English) — from Latin *inventus*, perfect passive participle of *inveniō* "come upon, meet with, find, discover", from *in* "in, on" + *veniō* "come".

## invention

- Record: `{prefix:"in-", stem:"ven", suffix:"-ion", literal:"come into", definition:"something new that someone has created"}`
- Review: Confirmed `in-` + `ven` + `-ion`; replaced the circular "the act of inventing".
- Reference: Wiktionary, [invention](https://en.wiktionary.org/wiki/invention#English) — from Latin *inventiō*, from *inveniō*, *invenīre* "to discover, find, invent", from *in-* + *veniō* "to come".

## inventory

- Record: `{prefix:"in-", stem:"ven", suffix:"-ory", literal:"come into", definition:"a complete list of items, such as the goods a store has"}`
- Review: Confirmed `in-` + `ven` + `-ory`.
- Reference: Wiktionary, [inventory](https://en.wiktionary.org/wiki/inventory#English) — from Medieval Latin *inventōrium*, alteration of Late Latin *inventārium*, from *inveniō* "to find out".

## prevent

- Record: `{prefix:"pre-", stem:"ven", suffix:null, literal:"come before", definition:"to stop something from happening"}`
- Review: Confirmed `pre-` + `ven` (Latin *prae-*).
- Reference: Wiktionary, [prevent](https://en.wiktionary.org/wiki/prevent#English) — from Latin *praeventus*, perfect passive participle of *praeveniō* "to anticipate", from *prae* "before" + *veniō* "to come".

## venture

- Record: `{prefix:null, stem:"ven", suffix:"-ure", literal:"come", definition:"a new and risky project or journey"}`
- Review: Confirmed `ven` + `-ure` with a caveat: *venture* is a clipping of *adventure* (from Latin *adveniō*), so it lost the `ad-` prefix in English.
- Reference: Wiktionary, [venture](https://en.wiktionary.org/wiki/venture#English) — clipping of *adventure*.
- Reference: Wiktionary, [adventure](https://en.wiktionary.org/wiki/adventure#English) — from Latin *adventūrus*, future active participle of *adveniō* "to arrive".

## evidence

- Record: `{prefix:"ex-", stem:"vid", suffix:"-ence", literal:"see out of", definition:"facts or signs that show something is true"}`
- Review: Confirmed `ex-` + `vid` + `-ence`.
- Reference: Wiktionary, [evidence](https://en.wiktionary.org/wiki/evidence#English) — from Latin *evidentia* "clearness, in Late Latin a proof", from *evidens* "clear, evident".
- Reference: Wiktionary (Latin), [evidens](https://en.wiktionary.org/wiki/evidens#Latin) — from *ē-* "out-, ex-" + *videō* "see".

## invisible

- Record: `{prefix:"in-", stem:"vid", suffix:"-ible", literal:"not see", definition:"impossible to see"}`
- Review: Confirmed `in-` (not) + `vid` + `-ible`.
- Reference: Wiktionary, [invisible](https://en.wiktionary.org/wiki/invisible#English) — from Late Latin *invīsibilis*; morphologically *in-* (inverse) + *visible*.
- Reference: Wiktionary (Latin), [invisibilis](https://en.wiktionary.org/wiki/invisibilis#Latin) — *invīsibilis* = *in-* "not" + *vīsibilis*.

## provide

- Record: `{prefix:"pro-", stem:"vid", suffix:null, literal:"see forward", definition:"to give someone something they need"}`
- Review: Confirmed `pro-` + `vid`.
- Reference: Wiktionary, [provide](https://en.wiktionary.org/wiki/provide#English) — from Latin *prōvideō*, *prōvidēre* "to foresee, act with foresight".
- Reference: Wiktionary (Latin), [provideo](https://en.wiktionary.org/wiki/provideo#Latin) — *prōvideō* = *prō-* "prior, fore-" + *videō* "to see".

## providence

- Record: `{prefix:"pro-", stem:"vid", suffix:"-ence", literal:"see forward", definition:"care and guidance believed to come from God or nature"}`
- Review: Confirmed `pro-` + `vid` + `-ence`. The source definition named the city of Providence, Rhode Island; replaced it with the word's sense.
- Reference: Wiktionary, [providence](https://en.wiktionary.org/wiki/providence#English) — from Latin *prōvidentia* "providence, foresight", from the present participle of *prōvidēre* "to provide".

## supervision

- Record: `{prefix:"super-", stem:"vid", suffix:"-ion", literal:"see above", definition:"the act of watching over people or work to make sure it is done right"}`
- Review: Confirmed `super-` + `vid` + `-ion`.
- Reference: Wiktionary, [supervision](https://en.wiktionary.org/wiki/supervision#English) — from Latin *supervisiō*.
- Reference: Wiktionary, [supervisor](https://en.wiktionary.org/wiki/supervisor#English) — from Latin *supervīsor*, from *supervideō*, in turn from *super* + *videō*.

## supervisor

- Record: `{prefix:"super-", stem:"vid", suffix:"-or", literal:"see above", definition:"a person who is in charge of other people's work"}`
- Review: Confirmed `super-` + `vid` + `-or`.
- Reference: Wiktionary, [supervisor](https://en.wiktionary.org/wiki/supervisor#English) — from Latin *supervīsor*, from *supervideō*, in turn from *super* + *videō*.

## visible

- Record: `{prefix:null, stem:"vid", suffix:"-ible", literal:"see", definition:"able to be seen"}`
- Review: Confirmed `vid` + `-ible`.
- Reference: Wiktionary, [visible](https://en.wiktionary.org/wiki/visible#English) — from Late Latin *visibilis* "that may be seen", from Latin *videre* "to see".
- Reference: Wiktionary (Latin), [visibilis](https://en.wiktionary.org/wiki/visibilis#Latin) — *vīsibilis* = *videō* "see" + *-bilis*.

## vision

- Record: `{prefix:null, stem:"vid", suffix:"-ion", literal:"see", definition:"the ability to see"}`
- Review: Confirmed `vid` + `-ion`; definition unchanged.
- Reference: Wiktionary, [vision](https://en.wiktionary.org/wiki/vision#English) — from Latin *vīsiō* "vision, seeing", from *visus* "that which is seen", from *videō* "to see" + *-iō*.

## conference

- Record: `{prefix:"con-", stem:"fer", suffix:"-ence", literal:"carry with", definition:"a formal meeting where people discuss a topic"}`
- Review: Confirmed `con-` + `fer` + `-ence`.
- Reference: Wiktionary, [conference](https://en.wiktionary.org/wiki/conference#English) — from Medieval Latin *cōnferentia*, from Latin *cōnferēns*, … from *con-* + *ferō*.
- Reference: Wiktionary (Latin), [confero](https://en.wiktionary.org/wiki/confero#Latin) — *cōnferō* = *con-* "together" + *ferō* "to bear".

## difference

- Record: `{prefix:"dis-", stem:"fer", suffix:"-ence", literal:"carry apart", definition:"the way in which two things are not alike"}`
- Review: Confirmed `dis-` + `fer` + `-ence`.
- Reference: Wiktionary, [difference](https://en.wiktionary.org/wiki/difference#English) — from Latin *differentia* "difference", from *differēns* "different", present participle of *differo*.
- Reference: Wiktionary (Latin), [differo](https://en.wiktionary.org/wiki/differo#Latin) — *differō* = *dis-* "apart" + *ferō* "carry, bear".

## different

- Record: `{prefix:"dis-", stem:"fer", suffix:"-ent", literal:"carry apart", definition:"not the same as another or each other"}`
- Review: Confirmed `dis-` + `fer` + `-ent`; replaced "differing from all others".
- Reference: Wiktionary, [different](https://en.wiktionary.org/wiki/different#English) — from Latin *differēns*, present active participle of *differō* "to differ".
- Reference: Wiktionary (Latin), [differo](https://en.wiktionary.org/wiki/differo#Latin) — *differō* = *dis-* "apart" + *ferō* "carry, bear".

## offer

- Record: `{prefix:"ob-", stem:"fer", suffix:null, literal:"carry toward", definition:"to hold out something for someone to take or accept"}`
- Review: Confirmed `ob-` + `fer`. The verb came into English by two routes, Old English *offrian* (religious senses) and Old French *ofrir* (other senses), both from Latin *offerō*. Replaced "a usually brief attempt". Literal changed from "carry against" to "carry toward", matching the source's literal gloss "to bring to".
- Reference: Wiktionary, [offer](https://en.wiktionary.org/wiki/offer#English) — (verb) "In the religious senses inherited from Old English *offrian* … otherwise from Old French *ofrir*. Both ultimately from Latin *offerō* 'to present, bestow, bring before' (literally 'to bring to'), from *ob* + *ferō* 'bring, carry'".
- Reference: Wiktionary (Latin), [offero](https://en.wiktionary.org/wiki/offero#Latin) — *offerō* = *ob-* "towards" + *ferō* "to bear, carry".

## prefer

- Record: `{prefix:"pre-", stem:"fer", suffix:null, literal:"carry before", definition:"to like one thing better than another"}`
- Review: Confirmed `pre-` + `fer` (Latin *prae-*).
- Reference: Wiktionary, [prefer](https://en.wiktionary.org/wiki/prefer#English) — from Anglo-Norman *preferer*, from Latin *praeferō*.
- Reference: Wiktionary (Latin), [praefero](https://en.wiktionary.org/wiki/praefero#Latin) — *praeferō* = *prae-* "before, in front" + *ferō* "to carry, to bear".

## refer

- Record: `{prefix:"re-", stem:"fer", suffix:null, literal:"carry back", definition:"to mention something, or to send someone to another person or place for help"}`
- Review: Confirmed `re-` + `fer`; replaced "be relevant to".
- Reference: Wiktionary, [refer](https://en.wiktionary.org/wiki/refer#English) — from Old French *referer*, from Latin *referre*.
- Reference: Wiktionary (Latin), [refero](https://en.wiktionary.org/wiki/refero#Latin) — *referō* = *re-* + *ferō* "bear, carry".

## reference

- Record: `{prefix:"re-", stem:"fer", suffix:"-ence", literal:"carry back", definition:"a mention of something, or a source you look at for information"}`
- Review: Confirmed `re-` + `fer` + `-ence`.
- Reference: Wiktionary, [reference](https://en.wiktionary.org/wiki/reference#English) — from Medieval Latin *referentia*, … of *referēns*, present participle of *referō* "return, reply" (literally "carry back").

## suffer

- Record: `{prefix:"sub-", stem:"fer", suffix:null, literal:"carry under", definition:"to feel pain or go through something bad"}`
- Review: Confirmed `sub-` + `fer`.
- Reference: Wiktionary, [suffer](https://en.wiktionary.org/wiki/suffer#English) — from Latin *sufferō* "to offer, hold up, bear, suffer", from *sub-* "up, under" + *ferō* "to carry".

## transfer

- Record: `{prefix:"trans-", stem:"fer", suffix:null, literal:"carry across", definition:"the act of moving something or someone from one place to another"}`
- Review: Confirmed `trans-` + `fer`; definition kept close to the source.
- Reference: Wiktionary, [transfer](https://en.wiktionary.org/wiki/transfer#English) — from Latin *trānsferō* "to bear across".
- Reference: Wiktionary (Latin), [transfero](https://en.wiktionary.org/wiki/transfero#Latin) — *trānsferō* = *trāns-* "beyond" + *ferō* "to bear, carry".

## affect

- Record: `{prefix:"ad-", stem:"fac", suffix:null, literal:"make to", definition:"to have an influence on someone or something"}`
- Review: Confirmed `ad-` + `fac` (Latin *afficere*).
- Reference: Wiktionary, [affect](https://en.wiktionary.org/wiki/affect#English) — from Latin *affectāre*, from *affectus*, the participle stem of *afficere* "to act upon, influence, affect", from *ad-* + *facere* "to make, do".

## affection

- Record: `{prefix:"ad-", stem:"fac", suffix:"-ion", literal:"make to", definition:"a feeling of fondness or love"}`
- Review: Confirmed `ad-` + `fac` + `-ion`.
- Reference: Wiktionary, [affection](https://en.wiktionary.org/wiki/affection#English) — from Latin *affectiōnem*, from *affectiō*; equivalent to *affect* + *-ion*.
- Reference: Wiktionary (Latin), [affectio](https://en.wiktionary.org/wiki/affectio#Latin) — *affectiō* = *afficiō* "to exert an influence on the body or mind" + *-tiō*.

## defect

- Record: `{prefix:"de-", stem:"fac", suffix:null, literal:"undo", definition:"a fault or flaw in something"}`
- Review: Confirmed `de-` + `fac`. Literal changed from "make down" to "undo", the source's literal gloss of *deficere*.
- Reference: Wiktionary, [defect](https://en.wiktionary.org/wiki/defect#English) — from Latin *defectus* "a failure, lack", from *deficere* "to fail, lack, literally 'undo'", from *de-* "of, from" + *facere* "to do".

## effect

- Record: `{prefix:"ex-", stem:"fac", suffix:null, literal:"make out of", definition:"a change that is caused by something"}`
- Review: Confirmed `ex-` + `fac`; replaced "an outward appearance".
- Reference: Wiktionary, [effect](https://en.wiktionary.org/wiki/effect#English) — from Latin *effectus* "an effect, tendency, purpose", from *efficiō* "accomplish, complete, effect".
- Reference: Wiktionary (Latin), [efficio](https://en.wiktionary.org/wiki/efficio#Latin) — *efficiō* = *ex-* "out of" + *faciō* "to do, to make".

## effective

- Record: `{prefix:"ex-", stem:"fac", suffix:"-ive", literal:"make out of", definition:"working well and producing the result you want"}`
- Review: Confirmed `ex-` + `fac` + `-ive`.
- Reference: Wiktionary, [effective](https://en.wiktionary.org/wiki/effective#English) — from Latin *effectīvus* "productive; effective", from *efficiō* "to make; to bring about", equivalent to *effect* + *-ive*.

## factor

- Record: `{prefix:null, stem:"fac", suffix:"-or", literal:"make", definition:"one of the things that helps cause a result"}`
- Review: Confirmed `fac` + `-or`; replaced "an abstract part of something".
- Reference: Wiktionary, [factor](https://en.wiktionary.org/wiki/factor#English) — from Latin *factor* "a doer, maker, performer", from *factus* "done or made", perfect passive participle of *faciō* "do, make".

## perfect

- Record: `{prefix:"per-", stem:"fac", suffix:null, literal:"make through", definition:"having no mistakes or flaws"}`
- Review: Confirmed `per-` + `fac`; replaced the verb gloss with the common adjective sense.
- Reference: Wiktionary, [perfect](https://en.wiktionary.org/wiki/perfect#English) — from Latin *perfectus*, perfect passive participle of *perficere* "to finish", from *per-* "through, thorough" + *facere* "to do, to make".

## perfection

- Record: `{prefix:"per-", stem:"fac", suffix:"-ion", literal:"make through", definition:"the state of being perfect"}`
- Review: Confirmed `per-` + `fac` + `-ion`.
- Reference: Wiktionary, [perfection](https://en.wiktionary.org/wiki/perfection#English) — from Latin *perfectiō*; *perfect* + *-ion*.
- Reference: Wiktionary (Latin), [perfectio](https://en.wiktionary.org/wiki/perfectio#Latin) — *perfectiō* = *perficiō* + *-tiō*.

## inject

- Record: `{prefix:"in-", stem:"ject", suffix:null, literal:"throw into", definition:"to put a liquid such as medicine into the body with a needle"}`
- Review: Confirmed `in-` + `ject`.
- Reference: Wiktionary, [inject](https://en.wiktionary.org/wiki/inject#English) — from Latin *iniectus*, participle of *iniciō* "to throw in", from *in-* + *iaciō* "I throw".

## injection

- Record: `{prefix:"in-", stem:"ject", suffix:"-ion", literal:"throw into", definition:"the act of putting medicine into the body with a needle"}`
- Review: Confirmed `in-` + `ject` + `-ion`.
- Reference: Wiktionary, [injection](https://en.wiktionary.org/wiki/injection#English) — from Latin *iniectio*; equivalent to *inject* + *-ion*.
- Reference: Wiktionary (Latin), [inicio](https://en.wiktionary.org/wiki/inicio#Latin) — *iniciō* = *in-* "into" + *iaciō* "throw, hurl".

## object

- Record: `{prefix:"ob-", stem:"ject", suffix:null, literal:"throw against", definition:"a thing that you can see and touch"}`
- Review: Confirmed `ob-` + `ject`.
- Reference: Wiktionary, [object](https://en.wiktionary.org/wiki/object#English) — from Medieval Latin *obiectum* "object" (literally "thrown against"), from *obiectus*, perfect passive participle of *obiciō* "to throw against", from *ob* "against" + *iaciō* "to throw".

## objection

- Record: `{prefix:"ob-", stem:"ject", suffix:"-ion", literal:"throw against", definition:"a reason or statement against something"}`
- Review: Confirmed `ob-` + `ject` + `-ion`.
- Reference: Wiktionary, [objection](https://en.wiktionary.org/wiki/objection#English) — from Latin *obiectio*; equivalent to *object* + *-ion*.
- Reference: Wiktionary (Latin), [obicio](https://en.wiktionary.org/wiki/obicio#Latin) — *obiciō* = *ob-* "towards, against" + *iaciō* "to throw, hurl".

## objective

- Record: `{prefix:"ob-", stem:"ject", suffix:"-ive", literal:"throw against", definition:"a goal you are trying to reach; also, fair and not influenced by personal feelings"}`
- Review: Confirmed `ob-` + `ject` + `-ive`.
- Reference: Wiktionary, [objective](https://en.wiktionary.org/wiki/objective#English) — from Medieval Latin *obiectīvus*; *object* + *-ive*.
- Reference: Wiktionary (Latin), [obiectivus](https://en.wiktionary.org/wiki/obiectivus#Latin) — *obiectīvus* = *obiciō* "to present, expose" + *-īvus*.

## project

- Record: `{prefix:"pro-", stem:"ject", suffix:null, literal:"throw forward", definition:"a planned piece of work with a goal"}`
- Review: Confirmed `pro-` + `ject`; replaced "communicate vividly".
- Reference: Wiktionary, [project](https://en.wiktionary.org/wiki/project#English) — from Latin *prōiectus*, perfect passive participle of *prōiciō* "throw forth, extend; expel".
- Reference: Wiktionary (Latin), [proicio](https://en.wiktionary.org/wiki/proicio#Latin) — *prōiciō* = *prō-* + *iaciō* "throw, hurl".

## reject

- Record: `{prefix:"re-", stem:"ject", suffix:null, literal:"throw back", definition:"to refuse to accept something"}`
- Review: Confirmed `re-` + `ject`.
- Reference: Wiktionary, [reject](https://en.wiktionary.org/wiki/reject#English) — from Latin *reiectus*, past participle of *reicere* "to throw back", from *re-* "back" + *iacere* "to throw".

## rejection

- Record: `{prefix:"re-", stem:"ject", suffix:"-ion", literal:"throw back", definition:"the act of refusing to accept something"}`
- Review: Confirmed `re-` + `ject` + `-ion`.
- Reference: Wiktionary, [rejection](https://en.wiktionary.org/wiki/rejection#English) — from French *réjection* or directly from Latin *reiectiōnem*, accusative of *reiectiō*.
- Reference: Wiktionary (Latin), [reicio](https://en.wiktionary.org/wiki/reicio#Latin) — *reiciō* = *re-* + *iaciō* "throw, hurl".

## subject

- Record: `{prefix:"sub-", stem:"ject", suffix:null, literal:"throw under", definition:"a topic you study or talk about"}`
- Review: Confirmed `sub-` + `ject`.
- Reference: Wiktionary, [subject](https://en.wiktionary.org/wiki/subject#English) — from Latin *subiectus* "lying under or near", … past participle of *subiciō* "throw, lay, place", from *sub* "under" + *iaciō* "throw, hurl".

## conservative

- Record: `{prefix:"con-", stem:"serv", suffix:"-ive", literal:"preserve", definition:"preferring to keep things the way they are, and careful about change"}`
- Review: Confirmed `con-` + `serv` + `-ive` (via *conserve* + *-ative*). Literal changed from "keep with" to "preserve": here *com-* is intensive, and Latin *cōnservāre* means "to keep, preserve".
- Reference: Wiktionary, [conservative](https://en.wiktionary.org/wiki/conservative#English) — from Middle French *conservatif*, from Latin *cōnservō* "to preserve"; equivalent to *conserve* + *-ative*.
- Reference: Wiktionary, [conserve](https://en.wiktionary.org/wiki/conserve#English) — from Latin *conservare* "to keep, preserve", from *com-* (intensive prefix) + *servo* "keep watch, maintain".

## deserve

- Record: `{prefix:"de-", stem:"serv", suffix:null, literal:"serve zealously", definition:"to have earned something because of what you have done"}`
- Review: Confirmed `de-` + `serv`, but from *serviō* "serve", not *servō* "keep". Literal changed from "keep down" to "serve zealously", the Latin entry's sense of *dēserviō*.
- Reference: Wiktionary, [deserve](https://en.wiktionary.org/wiki/deserve#English) — from Old French *deservir*, from Latin *dēserviō*, from *dē-* + *serviō*.
- Reference: Wiktionary (Latin), [deservio](https://en.wiktionary.org/wiki/deservio#Latin) — *dēserviō* = *de-* + *serviō*: "to serve zealously; to devote (oneself) to".

## observation

- Record: `{prefix:"ob-", stem:"serv", suffix:"-ion", literal:"watch over", definition:"the act of watching something carefully"}`
- Review: Confirmed as *observe* + *-ation*. Literal changed from "keep against" to "watch over" (see *observe*).
- Reference: Wiktionary, [observation](https://en.wiktionary.org/wiki/observation#English) — from Middle French *observacion*, and a learned borrowing from Latin *observātiō*; morphologically *observe* + *-ation*.

## observe

- Record: `{prefix:"ob-", stem:"serv", suffix:null, literal:"watch over", definition:"to watch something carefully, or to notice it"}`
- Review: Confirmed `ob-` + `serv`. Literal changed from "keep against" to "watch over": the source glosses *ob-* here as "before", and Latin *observō* means "to watch, keep watch over".
- Reference: Wiktionary, [observe](https://en.wiktionary.org/wiki/observe#English) — from Latin *observō* "to watch", from *ob-* "before" + *servō* "to keep".
- Reference: Wiktionary (Latin), [observo](https://en.wiktionary.org/wiki/observo#Latin) — *observō* = *ob-* + *servō* "watch, keep safe"; "to observe, watch, pay attention to; to guard, keep watch over".

## preserve

- Record: `{prefix:"pre-", stem:"serv", suffix:null, literal:"keep before", definition:"to keep something safe or in good condition"}`
- Review: Confirmed `pre-` + `serv` (Latin *prae-*); replaced the jam sense with the verb.
- Reference: Wiktionary, [preserve](https://en.wiktionary.org/wiki/preserve#English) — from Late Latin *praeservāre* "guard beforehand", from *prae* "before" + *servāre* "maintain, keep".

## reservation

- Record: `{prefix:"re-", stem:"serv", suffix:"-ion", literal:"keep back", definition:"an arrangement to save a seat, room, or table for someone"}`
- Review: Confirmed as *reserve* + *-ation*; chose the everyday booking sense.
- Reference: Wiktionary, [reservation](https://en.wiktionary.org/wiki/reservation#English) — from Middle French *reservation*, equivalent to *reserve* + *-ation*.
- Reference: Wiktionary (Latin), [reservo](https://en.wiktionary.org/wiki/reservo#Latin) — *reservō* = *re-* "again, back" + *servō* "save; preserve".

## reserve

- Record: `{prefix:"re-", stem:"serv", suffix:null, literal:"keep back", definition:"to save something for later or for a particular person"}`
- Review: Confirmed `re-` + `serv`; replaced the "formality of manner" noun sense.
- Reference: Wiktionary, [reserve](https://en.wiktionary.org/wiki/reserve#English) — from Old French *reserver*, from Latin *reservō* "to reserve, retain".
- Reference: Wiktionary (Latin), [reservo](https://en.wiktionary.org/wiki/reservo#Latin) — *reservō* = *re-* "again, back" + *servō* "save; preserve"; "to keep or hold back".

## servant

- Record: `{prefix:null, stem:"serv", suffix:"-ant", literal:"serve", definition:"a person whose job is to serve others, especially in a home"}`
- Review: Confirmed `serv` + `-ant`, from *serviō* "serve". Literal changed from "keep" to "serve".
- Reference: Wiktionary, [servant](https://en.wiktionary.org/wiki/servant#English) — from Old French *servant*, from the present participle of the verb *servir*; morphologically *serve* + *-ant*.
- Reference: Wiktionary, [serve](https://en.wiktionary.org/wiki/serve#English) — from Old French *servir*, from Latin *serviō* "be a slave; serve".

## server

- Record: `{prefix:null, stem:"serv", suffix:"-er", literal:"serve", definition:"a person who serves food, or a computer that provides data to other computers"}`
- Review: Confirmed as *serve* + *-er*. Literal changed from "keep" to "serve"; replaced the tennis-only gloss.
- Reference: Wiktionary, [server](https://en.wiktionary.org/wiki/server#English) — from Middle English *servere*, equivalent to *serve* + *-er*.
- Reference: Wiktionary, [serve](https://en.wiktionary.org/wiki/serve#English) — from Old French *servir*, from Latin *serviō* "be a slave; serve".

## attend

- Record: `{prefix:"ad-", stem:"tend", suffix:null, literal:"stretch to", definition:"to be present at an event, or to pay attention to something"}`
- Review: Confirmed `ad-` + `tend` (Latin *attendō*); replaced "take charge of".
- Reference: Wiktionary, [attend](https://en.wiktionary.org/wiki/attend#English) — from Middle English *attenden* "to devote oneself (to a task); to pay attention to …".
- Reference: Wiktionary (Latin), [attendo](https://en.wiktionary.org/wiki/attendo#Latin) — *attendō* = *ad-* + *tendō* "stretch, extend".

## attendance

- Record: `{prefix:"ad-", stem:"tend", suffix:"-ance", literal:"stretch to", definition:"the act of being present, or the number of people who are present"}`
- Review: Confirmed `ad-` + `tend` + `-ance`.
- Reference: Wiktionary, [attendance](https://en.wiktionary.org/wiki/attendance#English) — from Old French *atendance*, from *atendre* "to attend, listen".
- Reference: Wiktionary (Latin), [attendo](https://en.wiktionary.org/wiki/attendo#Latin) — *attendō* = *ad-* + *tendō* "stretch, extend".

## attendant

- Record: `{prefix:"ad-", stem:"tend", suffix:"-ant", literal:"stretch to", definition:"a person whose job is to help or serve people"}`
- Review: Confirmed as *attend* + *-ant*; chose the common job sense.
- Reference: Wiktionary, [attendant](https://en.wiktionary.org/wiki/attendant#English) — from Old French *attendant*; *attend* + *-ant*.

## extend

- Record: `{prefix:"ex-", stem:"tend", suffix:null, literal:"stretch out of", definition:"to make something longer or larger, or to reach out"}`
- Review: Confirmed `ex-` + `tend`; replaced the circular definition.
- Reference: Wiktionary, [extend](https://en.wiktionary.org/wiki/extend#English) — from Old French *estendre*, from Latin *extendō* "to stretch out".
- Reference: Wiktionary (Latin), [extendo](https://en.wiktionary.org/wiki/extendo#Latin) — *extendō* = *ex-* + *tendō* "stretch".

## intend

- Record: `{prefix:"in-", stem:"tend", suffix:null, literal:"stretch into", definition:"to plan or mean to do something"}`
- Review: Confirmed `in-` + `tend`; replaced "design or destine".
- Reference: Wiktionary, [intend](https://en.wiktionary.org/wiki/intend#English) — from Old French *entendre*, from Latin *intendō*, *intendere*.
- Reference: Wiktionary (Latin), [intendo](https://en.wiktionary.org/wiki/intendo#Latin) — *intendō* = *in-* + *tendō*.

## intense

- Record: `{prefix:"in-", stem:"tend", suffix:null, literal:"stretch into", definition:"very strong or extreme"}`
- Review: Confirmed `in-` + `tend` (Latin *intēnsus*, "stretched tight"); replaced the circular definition.
- Reference: Wiktionary, [intense](https://en.wiktionary.org/wiki/intense#English) — from Old French *intense*, or directly from Latin *intēnsus* "strained, stretched tight; intense".
- Reference: Wiktionary (Latin), [intensus](https://en.wiktionary.org/wiki/intensus#Latin) — *intēnsus*: perfect passive participle of *intendō*.

## intensity

- Record: `{prefix:"in-", stem:"tend", suffix:"-ity", literal:"stretch into", definition:"how strong or extreme something is"}`
- Review: Confirmed as *intense* + *-ity*.
- Reference: Wiktionary, [intensity](https://en.wiktionary.org/wiki/intensity#English) — *intense* + *-ity*; compare Medieval Latin *intensitas*.

## pretend

- Record: `{prefix:"pre-", stem:"tend", suffix:null, literal:"stretch before", definition:"to act as if something is true when it is not, especially in play"}`
- Review: Confirmed `pre-` + `tend` (Latin *prae-*); replaced the noun gloss with the verb.
- Reference: Wiktionary, [pretend](https://en.wiktionary.org/wiki/pretend#English) — from Latin *praetendo*, *praetendere* "to put forward, hold out, pretend", from *prae-* + *tendō* "stretch".

## attract

- Record: `{prefix:"ad-", stem:"tract", suffix:null, literal:"pull to", definition:"to pull something or someone toward you"}`
- Review: Confirmed `ad-` + `tract`; replaced the circular "be attractive to".
- Reference: Wiktionary, [attract](https://en.wiktionary.org/wiki/attract#English) — from Latin *attractus*, past participle of *attrahere* "to draw to, attract", from *ad* "to" + *trahere* "to draw".

## attraction

- Record: `{prefix:"ad-", stem:"tract", suffix:"-ion", literal:"pull to", definition:"the power to pull or draw things toward it, or something people enjoy visiting"}`
- Review: Confirmed `ad-` + `tract` + `-ion`.
- Reference: Wiktionary, [attraction](https://en.wiktionary.org/wiki/attraction#English) — from Latin *attractio*, from past participle of *attrahō* (= *ad* + *trahō*); equivalent to *attract* + *-ion*.

## attractive

- Record: `{prefix:"ad-", stem:"tract", suffix:"-ive", literal:"pull to", definition:"pleasing or interesting to look at or think about"}`
- Review: Confirmed `ad-` + `tract` + `-ive`.
- Reference: Wiktionary, [attractive](https://en.wiktionary.org/wiki/attractive#English) — from Late Latin *attractīvus*, equivalent to *attract* + *-ive*.
- Reference: Wiktionary (Latin), [attraho](https://en.wiktionary.org/wiki/attraho#Latin) — *attrahō* = *ad-* + *trahō* "drag".

## contract

- Record: `{prefix:"con-", stem:"tract", suffix:null, literal:"pull together", definition:"a written agreement that people must follow by law"}`
- Review: Confirmed `con-` + `tract`; simplified the definition. Literal changed from "pull with" to "pull together", matching *contrahō* "bring together".
- Reference: Wiktionary, [contract](https://en.wiktionary.org/wiki/contract#English) — from Latin *contractus*, from *contrahere* "to bring together, … to conclude a bargain", from *con-* "with, together" + *trahere* "to draw, to pull".

## contractor

- Record: `{prefix:"con-", stem:"tract", suffix:"-or", literal:"pull together", definition:"a person or company hired to do a job, such as building"}`
- Review: Confirmed `con-` + `tract` + `-or`; chose the everyday builder sense. Literal changed from "pull with" to "pull together", matching *contrahō* "bring together".
- Reference: Wiktionary, [contractor](https://en.wiktionary.org/wiki/contractor#English) — from Late Latin *contractor*, from *contract-*, stem of *contractus* + *-tor*.
- Reference: Wiktionary (Latin), [contraho](https://en.wiktionary.org/wiki/contraho#Latin) — *contrahō* = *con-* + *trahō* "drag".

## distract

- Record: `{prefix:"dis-", stem:"tract", suffix:null, literal:"pull apart", definition:"to pull someone's attention away from something"}`
- Review: Confirmed `dis-` + `tract`.
- Reference: Wiktionary, [distract](https://en.wiktionary.org/wiki/distract#English) — from Latin *distractus*, from *distrahō* "to pull apart", from *dis-* + *trahō* "to pull".

## distraction

- Record: `{prefix:"dis-", stem:"tract", suffix:"-ion", literal:"pull apart", definition:"something that takes your attention away from what you are doing"}`
- Review: Confirmed `dis-` + `tract` + `-ion`; replaced "mental turmoil".
- Reference: Wiktionary, [distraction](https://en.wiktionary.org/wiki/distraction#English) — from Middle French *distraction*, from Latin *distractio*; equivalent to *distract* + *-ion*.
- Reference: Wiktionary (Latin), [distraho](https://en.wiktionary.org/wiki/distraho#Latin) — *distrahō* = *dis-* + *trahō* "to drag".

## extract

- Record: `{prefix:"ex-", stem:"tract", suffix:null, literal:"pull out of", definition:"to pull or take something out"}`
- Review: Confirmed `ex-` + `tract`; replaced the noun "passage" sense with the verb.
- Reference: Wiktionary, [extract](https://en.wiktionary.org/wiki/extract#English) — from Latin *extractum*, neuter perfect passive participle of *extrahō*, from *ex-* "out of" + *trahō* "to drag".

## tractor

- Record: `{prefix:null, stem:"tract", suffix:"-or", literal:"pull", definition:"a powerful vehicle used for pulling farm machinery"}`
- Review: Confirmed `tract` + `-or`; replaced the truck-cab gloss with the common farm sense.
- Reference: Wiktionary, [tractor](https://en.wiktionary.org/wiki/tractor#English) — formed from Latin *tractus*, perfect passive participle of *trahō*, *trahere* "to pull", + agent noun suffix *-or*.

## addict

- Record: `{prefix:"ad-", stem:"dict", suffix:null, literal:"say to", definition:"a person who cannot stop using a harmful substance or repeating a harmful habit"}`
- Review: Confirmed `ad-` + `dict` (Latin *addīcō*, *ad-* + *dīcō* "say"). Definition simplified.
- Reference: Wiktionary, [addict](https://en.wiktionary.org/wiki/addict#English) — from Latin *addictus*, past participle of *addīcō* "deliver; devote; surrender", from *ad-* "to, towards, at" + *dīcō* "say; declare".
- Reference: Wiktionary (Latin), [addictus](https://en.wiktionary.org/wiki/addictus#Latin) — "handed over, having been handed over"; as a noun, "a debt slave; a person who has been bound as a slave to his creditor".

## addiction

- Record: `{prefix:"ad-", stem:"dict", suffix:"-ion", literal:"say to", definition:"a strong need to keep using something harmful or doing something harmful"}`
- Review: Confirmed as *addict* + *-ion*.
- Reference: Wiktionary, [addiction](https://en.wiktionary.org/wiki/addiction#English) — *addict* + *-ion*; compare Latin *addictio* "an adjudging, an award".
- Reference: Wiktionary (Latin), [addico](https://en.wiktionary.org/wiki/addico#Latin) — *addīcō* = *ad-* "to, towards, at" + *dīcō* "say, affirm, tell".

## dedicate

- Record: `{prefix:"de-", stem:"dict", suffix:"-ate", literal:"proclaim", definition:"to give your time and effort to something, or to honor someone with a work such as a book"}`
- Review: Confirmed `de-` + `dict` + `-ate` with a caveat: Latin *dēdicō* is *dē-* + *dicō* (first conjugation, "dedicate"), which the Latin *dicō* entry, citing de Vaan, lists as a derivative of *dīcō* "say". Literal changed from "say down" to "proclaim", a sense of *dēdicō*.
- Reference: Wiktionary, [dedicate](https://en.wiktionary.org/wiki/dedicate#English) — from Latin *dēdicātus*, the perfect passive participle of *dēdicō*.
- Reference: Wiktionary (Latin), [dico](https://en.wiktionary.org/wiki/dico#Latin) — (*dicō*, *dicāre*) per de Vaan, a derivative of *dīcō*: "*dicāre* 'to assign, dedicate; indicate'".
- Reference: Wiktionary (Latin), [dedico](https://en.wiktionary.org/wiki/dedico#Latin) — *dēdicō* = *dē-* + *dicō*: "to dedicate, consecrate; to proclaim".

## dedication

- Record: `{prefix:"de-", stem:"dict", suffix:"-ion", literal:"proclaim", definition:"hard work and loyalty given to a task or purpose"}`
- Review: Confirmed `de-` + `dict` + `-ion`; see the *dedicate* caveat. Literal changed from "say down" to "proclaim".
- Reference: Wiktionary, [dedication](https://en.wiktionary.org/wiki/dedication#English) — from Latin *dēdicātiō*, equivalent to *dēdicātus* + *-iōn*.

## indicate

- Record: `{prefix:"in-", stem:"dict", suffix:"-ate", literal:"point out", definition:"to point out or show something"}`
- Review: Confirmed `in-` + `dict` + `-ate`. The English entry gives *in-* + *dicō* "to declare, (originally) to point"; the Latin entry derives *indicō* from *index*, which is itself *in* + *dīcō*. Literal changed from "say into" to "point out", the sense of *indicō*.
- Reference: Wiktionary, [indicate](https://en.wiktionary.org/wiki/indicate#English) — from Latin *indicātus*, perfect passive participle of *indicō* "to point out, indicate", from *in-* "in, to" + *dicō* "to declare, (originally) to point".
- Reference: Wiktionary (Latin), [index](https://en.wiktionary.org/wiki/index#Latin) — *index* = *in* + *dīcō* "to say, indicate" + *-s*.

## indication

- Record: `{prefix:"in-", stem:"dict", suffix:"-ion", literal:"point out", definition:"a sign that shows something is true or likely"}`
- Review: Confirmed `in-` + `dict` + `-ion`; see *indicate*.
- Reference: Wiktionary, [indication](https://en.wiktionary.org/wiki/indication#English) — from Latin *indicātiō* "a showing, indicating", from *indicō* "point out, indicate, show"; *indicate* + *-ion*.

## predict

- Record: `{prefix:"pre-", stem:"dict", suffix:null, literal:"say before", definition:"to say what will happen in the future"}`
- Review: Confirmed `pre-` + `dict` (Latin *prae-*).
- Reference: Wiktionary, [predict](https://en.wiktionary.org/wiki/predict#English) — from Latin *praedicō* "to mention beforehand" (perfect passive participle *praedictus*), from *prae-* "before" + *dīcō* "to say".
- Reference: Wiktionary (Latin), [praedico](https://en.wiktionary.org/wiki/praedico#Latin) — (Etymology 2) *praedīcō* = *prae-* "before, in front" + *dīcō* "say, tell".

## predictable

- Record: `{prefix:"pre-", stem:"dict", suffix:"-able", literal:"say before", definition:"easy to know about before it happens"}`
- Review: Confirmed as *predict* + *-able*.
- Reference: Wiktionary, [predictable](https://en.wiktionary.org/wiki/predictable#English) — *predict* + *-able*.

## collect

- Record: `{prefix:"con-", stem:"lect", suffix:null, literal:"gather together", definition:"to gather things together"}`
- Review: Confirmed `con-` + `lect`. Literal changed from "read with" to "gather together": Latin *legō* here means "gather".
- Reference: Wiktionary, [collect](https://en.wiktionary.org/wiki/collect#English) — from Latin *collecta*, feminine of *collectus*.
- Reference: Wiktionary (Latin), [colligo](https://en.wiktionary.org/wiki/colligo#Latin) — *colligō* = *con-* + *legō* "bring together, gather, collect".

## collection

- Record: `{prefix:"con-", stem:"lect", suffix:"-ion", literal:"gather together", definition:"a group of things gathered together"}`
- Review: Confirmed `con-` + `lect` + `-ion`. Literal changed from "read with" to "gather together"; replaced "request for a sum of money".
- Reference: Wiktionary, [collection](https://en.wiktionary.org/wiki/collection#English) — from Latin *collēctiō*, from *collēctus*, from *colligō* "collect together", composed of *con* + *legō* "bring together, gather, collect".

## collective

- Record: `{prefix:"con-", stem:"lect", suffix:"-ive", literal:"gather together", definition:"shared or done by a group of people"}`
- Review: Confirmed `con-` + `lect` + `-ive`. Literal changed from "read with" to "gather together".
- Reference: Wiktionary, [collective](https://en.wiktionary.org/wiki/collective#English) — from Latin *collēctīvus*, from *collēctus*, past participle of *colligō* "to collect", from *com-* "together" + *legō* "to gather".

## collector

- Record: `{prefix:"con-", stem:"lect", suffix:"-or", literal:"gather together", definition:"a person who collects things"}`
- Review: Confirmed `con-` + `lect` + `-or`. Literal changed from "read with" to "gather together"; definition unchanged.
- Reference: Wiktionary, [collector](https://en.wiktionary.org/wiki/collector#English) — from Late Latin *collēctor*, from *colligō* "to gather together".

## election

- Record: `{prefix:"ex-", stem:"lect", suffix:"-ion", literal:"choose out", definition:"the process of choosing someone by voting"}`
- Review: Confirmed `ex-` + `lect` + `-ion`. Literal changed from "read out of" to "choose out".
- Reference: Wiktionary, [election](https://en.wiktionary.org/wiki/election#English) — from Latin *ēlectiō* "choice, selection", from *ēligō* "to pluck out, to choose".
- Reference: Wiktionary (Latin), [eligo](https://en.wiktionary.org/wiki/eligo#Latin) — *ēligō* = *ex-* "out of, from" + *legō* "to choose, select".

## lecture

- Record: `{prefix:null, stem:"lect", suffix:"-ure", literal:"read", definition:"a talk given to teach people about a subject"}`
- Review: Confirmed `lect` + `-ure` (literal "read" kept: *lectūra* means "reading"). Replaced "a lengthy rebuke".
- Reference: Wiktionary, [lecture](https://en.wiktionary.org/wiki/lecture#English) — from Late Latin *lectura* "reading", from Latin *lectus*, past participle of *legō* "to read, recite".

## select

- Record: `{prefix:"se-", stem:"lect", suffix:null, literal:"choose apart", definition:"to choose something carefully from a group"}`
- Review: Confirmed `se-` + `lect`. Literal changed from "read apart" to "choose apart"; replaced the adjective "of superior grade" with the verb.
- Reference: Wiktionary, [select](https://en.wiktionary.org/wiki/select#English) — from Latin *sēlēctus*, perfect passive participle of *sēligō* "choose out, select", from *sē-* "without; apart" + *legō* "gather, select".

## selection

- Record: `{prefix:"se-", stem:"lect", suffix:"-ion", literal:"choose apart", definition:"the act of choosing, or a group of things chosen"}`
- Review: Confirmed `se-` + `lect` + `-ion`. Literal changed from "read apart" to "choose apart".
- Reference: Wiktionary, [selection](https://en.wiktionary.org/wiki/selection#English) — from Latin *sēlēctiō* "the act of choosing out, selection", from *sēligō*, from *sē-* "apart" + *legō* "gather, select".

## compensate

- Record: `{prefix:"con-", stem:"pend", suffix:"-ate", literal:"weigh together", definition:"to make up for something, such as a loss or a lack"}`
- Review: Confirmed `con-` + `pend` + `-ate` via *pēnsō*, the frequentative of *pendō* "weigh". Literal changed from "hang with" to "weigh together".
- Reference: Wiktionary, [compensate](https://en.wiktionary.org/wiki/compensate#English) — from Latin *compēnsātus*, perfect passive participle of *compensō* "to weigh together one thing against another, balance, make good".
- Reference: Wiktionary (Latin), [compenso](https://en.wiktionary.org/wiki/compenso#Latin) — *compēnsō* = *con-* + *pēnsō*; *pēnsō*: frequentative of *pendō*.

## compensation

- Record: `{prefix:"con-", stem:"pend", suffix:"-ion", literal:"weigh together", definition:"something given to make up for a loss or to pay for work"}`
- Review: Confirmed `con-` + `pend` + `-ion`; see *compensate*. Literal changed from "hang with" to "weigh together".
- Reference: Wiktionary, [compensation](https://en.wiktionary.org/wiki/compensation#English) — from Latin *compensātiō*; equivalent to *compensate* + *-ion*.

## depend

- Record: `{prefix:"de-", stem:"pend", suffix:null, literal:"hang down", definition:"to need or rely on someone or something"}`
- Review: Confirmed `de-` + `pend` (Latin *dēpendeō*, "hang down").
- Reference: Wiktionary, [depend](https://en.wiktionary.org/wiki/depend#English) — from Middle English *dependen*, from Old French *dependre*, from Latin *dependeō*.
- Reference: Wiktionary (Latin), [dependeo](https://en.wiktionary.org/wiki/dependeo#Latin) — *dēpendeō* = *dē-* + *pendeō* "to be suspended, hang".

## dependent

- Record: `{prefix:"de-", stem:"pend", suffix:"-ent", literal:"hang down", definition:"needing someone or something for support"}`
- Review: Confirmed `de-` + `pend` + `-ent`.
- Reference: Wiktionary, [dependent](https://en.wiktionary.org/wiki/dependent#English) — from Middle French *dependant* and Latin *dēpendēns* (present participle of *dēpendeō* "to depend"); *depend* + *-ent*.

## expense

- Record: `{prefix:"ex-", stem:"pend", suffix:null, literal:"weigh out", definition:"the money spent on something"}`
- Review: Confirmed `ex-` + `pend`. Literal changed from "hang out of" to "weigh out": Latin *expendō* is *ex-* + *pendō* "weigh".
- Reference: Wiktionary, [expense](https://en.wiktionary.org/wiki/expense#English) — from Late Latin *expēnsa*, from Latin *expendō*.
- Reference: Wiktionary (Latin), [expendo](https://en.wiktionary.org/wiki/expendo#Latin) — *expendō* = *ex-* + *pendō* "weigh, weigh out".

## expensive

- Record: `{prefix:"ex-", stem:"pend", suffix:"-ive", literal:"weigh out", definition:"costing a lot of money"}`
- Review: Confirmed `ex-` + `pend` + `-ive`. Literal changed from "hang out of" to "weigh out".
- Reference: Wiktionary, [expensive](https://en.wiktionary.org/wiki/expensive#English) — from Latin *\*expēnsīvus*, from *expendō* "to weigh out (money), to pay out"; *expense* + *-ive*.

## pension

- Record: `{prefix:null, stem:"pend", suffix:"-ion", literal:"weigh", definition:"money paid regularly to someone after they retire"}`
- Review: Confirmed `pend` + `-ion`. Literal changed from "hang" to "weigh": Latin *pēnsiō* comes from *pendō* "to weigh". Replaced the verb gloss.
- Reference: Wiktionary, [pension](https://en.wiktionary.org/wiki/pension#English) — from Latin *pēnsiō* "payment, weight, rent, compensation", from the participle stem of *pendō* "to weigh".

## suspension

- Record: `{prefix:"sub-", stem:"pend", suffix:"-ion", literal:"hang under", definition:"the act of hanging something, or a short stop or pause"}`
- Review: Confirmed `sub-` + `pend` + `-ion`; replaced the circular definition.
- Reference: Wiktionary, [suspension](https://en.wiktionary.org/wiki/suspension#English) — from Late Latin *suspensiō*, from *suspendo* "to hang up, to suspend", from *sub-* "under" + *pendo* "to hang, to suspend".

## consent

- Record: `{prefix:"con-", stem:"sens", suffix:null, literal:"feel with", definition:"permission or agreement to let something happen"}`
- Review: Confirmed `con-` + `sens`.
- Reference: Wiktionary, [consent](https://en.wiktionary.org/wiki/consent#English) — from Latin *cōnsentiō* "to agree; to assent, consent", itself from *com-* "with" + *sentiō* "to feel".

## insensitive

- Record: `{prefix:"in-", stem:"sens", suffix:"-ive", literal:"not feel", definition:"not caring about other people's feelings"}`
- Review: Confirmed *in-* (not) + *sensitive*. Literal changed from "feel into" to "not feel".
- Reference: Wiktionary, [insensitive](https://en.wiktionary.org/wiki/insensitive#English) — *in-* (not) + *sensitive*.
- Reference: Wiktionary, [sensitive](https://en.wiktionary.org/wiki/sensitive#English) — from Middle French *sensitif*, from Medieval Latin *sensitivus*.
- Reference: Wiktionary (Latin), [sensitivus](https://en.wiktionary.org/wiki/sensitivus#Latin) — Medieval Latin irregular formation from *sentiō* "to feel".

## nonsense

- Record: `{prefix:"non-", stem:"sens", suffix:null, literal:"no sense", definition:"words or ideas that make no sense"}`
- Review: Confirmed *non-* + *sense* with a caveat: English *sense* is partly from Latin *sēnsus* (from *sentiō*) and partly of Germanic origin. Literal changed from "feel not" to "no sense"; replaced the adjective gloss with the noun.
- Reference: Wiktionary, [nonsense](https://en.wiktionary.org/wiki/nonsense#English) — from *non-* "no, none, lack of" + *sense*, from c. 1610.
- Reference: Wiktionary, [sense](https://en.wiktionary.org/wiki/sense#English) — partly from Latin *sēnsus* "sensation, feeling, meaning", from *sentiō* "feel, perceive"; partly of Germanic origin.

## resent

- Record: `{prefix:"re-", stem:"sens", suffix:null, literal:"feel back", definition:"to feel angry about something you think is unfair"}`
- Review: Confirmed `re-` + `sens` via Old French *re-* + *sentir* "to feel".
- Reference: Wiktionary, [resent](https://en.wiktionary.org/wiki/resent#English) — from Old French *resentir*, from *re-* + *sentir* "to feel".

## sensation

- Record: `{prefix:null, stem:"sens", suffix:"-ion", literal:"feel", definition:"a feeling in the body, such as warmth or pain"}`
- Review: Confirmed `sens` + `-ion`; replaced the "dazzlingly skilled person" sense.
- Reference: Wiktionary, [sensation](https://en.wiktionary.org/wiki/sensation#English) — from Medieval Latin *sensatio*, from Latin *sensus*.
- Reference: Wiktionary (Latin), [sensatio](https://en.wiktionary.org/wiki/sensatio#Latin) — *sēnsus* + *-ātiō*.

## sensible

- Record: `{prefix:null, stem:"sens", suffix:"-ible", literal:"feel", definition:"showing good judgment"}`
- Review: Confirmed `sens` + `-ible`; chose the common modern sense.
- Reference: Wiktionary, [sensible](https://en.wiktionary.org/wiki/sensible#English) — from Latin *sēnsibilis* "perceptible by the senses, having feeling, sensible", from *sentiō* "to feel, perceive".

## sensitive

- Record: `{prefix:null, stem:"sens", suffix:"-ive", literal:"feel", definition:"quick to notice or react to things, including other people's feelings"}`
- Review: Confirmed `sens` + `-ive`.
- Reference: Wiktionary, [sensitive](https://en.wiktionary.org/wiki/sensitive#English) — from Middle French *sensitif*, from Medieval Latin *sensitivus*; *sense* + *-ite* + *-ive*.
- Reference: Wiktionary (Latin), [sensitivus](https://en.wiktionary.org/wiki/sensitivus#Latin) — Medieval Latin irregular formation from *sentiō* "to feel".

## sentence

- Record: `{prefix:null, stem:"sens", suffix:"-ence", literal:"feel", definition:"a group of words that expresses a complete thought"}`
- Review: Confirmed `sens` + `-ence` (Latin *sententia*, from *sentiō*). Chose the grammar sense over the prison-term sense.
- Reference: Wiktionary, [sentence](https://en.wiktionary.org/wiki/sentence#English) — from Latin *sententia* "way of thinking, opinion, sentiment", from *sentiēns*, present participle of *sentiō* "to feel, think".

## assign

- Record: `{prefix:"ad-", stem:"sign", suffix:null, literal:"mark to", definition:"to give someone a task or a share of something"}`
- Review: Confirmed `ad-` + `sign`; replaced "give out".
- Reference: Wiktionary, [assign](https://en.wiktionary.org/wiki/assign#English) — from Old French *assigner*, from Latin *assignō*, from *ad-* + *signō* "mark, sign".
- Reference: Wiktionary (Latin), [assigno](https://en.wiktionary.org/wiki/assigno#Latin) — *assignō* = *ad-* + *signō* "to mark, designate".

## assignment

- Record: `{prefix:"ad-", stem:"sign", suffix:"-ment", literal:"mark to", definition:"a task that someone is given to do"}`
- Review: Confirmed as *assign* + *-ment*; chose the everyday homework/task sense.
- Reference: Wiktionary, [assignment](https://en.wiktionary.org/wiki/assignment#English) — from Old French *assignement*; *assign* + *-ment*.

## design

- Record: `{prefix:"de-", stem:"sign", suffix:null, literal:"mark out", definition:"a plan or drawing that shows how something will look or work"}`
- Review: Confirmed `de-` + `sign`. Literal changed from "mark down" to "mark out", the source's gloss of *designō*.
- Reference: Wiktionary, [design](https://en.wiktionary.org/wiki/design#English) — from Latin *designō* "to mark out, point out, describe, design, contrive", from *de-* (or *dis-*) + *signō* "to mark", from *signum* "mark".
- Reference: Wiktionary (Latin), [designo](https://en.wiktionary.org/wiki/designo#Latin) — *dēsignō* = *dē-* + *signō* "mark".

## designer

- Record: `{prefix:"de-", stem:"sign", suffix:"-er", literal:"mark out", definition:"a person who plans how things will look or work"}`
- Review: Confirmed as *design* + *-er*. Literal changed from "mark down" to "mark out".
- Reference: Wiktionary, [designer](https://en.wiktionary.org/wiki/designer#English) — *design* + *-er* (agent noun).

## resign

- Record: `{prefix:"re-", stem:"sign", suffix:null, literal:"unseal", definition:"to give up a job or position"}`
- Review: Confirmed `re-` + `sign`. Literal changed from "mark back" to "unseal", the source's gloss of Latin *resignāre*.
- Reference: Wiktionary, [resign](https://en.wiktionary.org/wiki/resign#English) — from Latin *resignāre* "to unseal, annul, assign, resign", from *re-* + *signāre* "to seal, stamp".
- Reference: Wiktionary (Latin), [resigno](https://en.wiktionary.org/wiki/resigno#Latin) — *resignō* = *re-* + *signō* "mark": "to resign, give up; to unseal, open".

## resignation

- Record: `{prefix:"re-", stem:"sign", suffix:"-ion", literal:"unseal", definition:"the act of giving up a job or position"}`
- Review: Confirmed as *resign* + *-ation*. Literal changed from "mark back" to "unseal"; replaced "acceptance of despair".
- Reference: Wiktionary, [resignation](https://en.wiktionary.org/wiki/resignation#English) — from Medieval Latin *resignātiōnem*, accusative of *resignātio*; *resign* + *-ation*.

## signal

- Record: `{prefix:null, stem:"sign", suffix:"-al", literal:"mark", definition:"a sound, light, or movement that gives a message or warning"}`
- Review: Confirmed `sign` + `-al`; replaced "any incitement to action".
- Reference: Wiktionary, [signal](https://en.wiktionary.org/wiki/signal#English) — from Medieval Latin *signāle*, noun use of the neuter of Late Latin *signālis*, from Latin *signum*.

## signature

- Record: `{prefix:null, stem:"sign", suffix:"-ure", literal:"mark", definition:"your name written in your own special way"}`
- Review: Confirmed `sign` + `-ure` (Latin *-tūra*); replaced "a distinguishing style".
- Reference: Wiktionary, [signature](https://en.wiktionary.org/wiki/signature#English) — from Medieval Latin *signātūra*, … of verb *signāre* from *signum* "sign", + *-tūra*.

## assist

- Record: `{prefix:"ad-", stem:"sist", suffix:null, literal:"stand at", definition:"to help someone"}`
- Review: Confirmed `ad-` + `sist`. Literal changed from "stand to" to "stand at", the source's gloss of *assistō*.
- Reference: Wiktionary, [assist](https://en.wiktionary.org/wiki/assist#English) — from Old French *assister* "to assist, to attend", from Latin *assistō* "stand at".
- Reference: Wiktionary (Latin), [assisto](https://en.wiktionary.org/wiki/assisto#Latin) — *assistō* = *ad-* "to, towards, at" + *sistō* "stand, be placed".

## assistance

- Record: `{prefix:"ad-", stem:"sist", suffix:"-ance", literal:"stand at", definition:"help given to someone"}`
- Review: Confirmed `ad-` + `sist` + `-ance`. Literal changed to "stand at"; replaced "a resource".
- Reference: Wiktionary, [assistance](https://en.wiktionary.org/wiki/assistance#English) — from Medieval Latin *assistentia*, from Latin *assistō* "to stand at"; *assist* + *-ance*.

## assistant

- Record: `{prefix:"ad-", stem:"sist", suffix:"-ant", literal:"stand at", definition:"a person whose job is to help someone else"}`
- Review: Confirmed as *assist* + *-ant*. Literal changed to "stand at"; replaced the adjective gloss.
- Reference: Wiktionary, [assistant](https://en.wiktionary.org/wiki/assistant#English) — from Middle French *assistant*, from *assister*; *assist* + *-ant*.

## consistent

- Record: `{prefix:"con-", stem:"sist", suffix:"-ent", literal:"stand with", definition:"always behaving or happening in the same way"}`
- Review: Confirmed `con-` + `sist` + `-ent`; replaced "capable of being reproduced".
- Reference: Wiktionary, [consistent](https://en.wiktionary.org/wiki/consistent#English) — from Latin *cōnsistēns*, present participle of *cōnsistō* "to agree with; to continue", from *con-* + *sistō*.
- Reference: Wiktionary (Latin), [consisto](https://en.wiktionary.org/wiki/consisto#Latin) — *cōnsistō* = *con-* + *sistō* "to cause to stand; to stand".

## insist

- Record: `{prefix:"in-", stem:"sist", suffix:null, literal:"stand on", definition:"to say firmly that something must happen or is true"}`
- Review: Confirmed `in-` + `sist`. Literal changed from "stand into" to "stand on", the Latin sense of *īnsistō*.
- Reference: Wiktionary, [insist](https://en.wiktionary.org/wiki/insist#English) — partly from Middle French *insister*, from Latin *īnsistō*; partly a back-formation from *insistence*.
- Reference: Wiktionary (Latin), [insisto](https://en.wiktionary.org/wiki/insisto#Latin) — *īnsistō* = *in-* + *sistō* "stand, set, place": "to set foot, stand, tread or press on or upon".

## persistent

- Record: `{prefix:"per-", stem:"sist", suffix:"-ent", literal:"stand through", definition:"continuing to try even when something is difficult"}`
- Review: Confirmed `per-` + `sist` + `-ent`; replaced "retained".
- Reference: Wiktionary, [persistent](https://en.wiktionary.org/wiki/persistent#English) — from Latin *persistēns*, present participle of *persistō* "continue steadfastly"; *persist* + *-ent*.
- Reference: Wiktionary (Latin), [persisto](https://en.wiktionary.org/wiki/persisto#Latin) — *persistō* = *per-* + *sistō*.

## resist

- Record: `{prefix:"re-", stem:"sist", suffix:null, literal:"stand back", definition:"to fight against something or refuse to accept it"}`
- Review: Confirmed `re-` + `sist`; replaced "elude, especially in a baffling way".
- Reference: Wiktionary, [resist](https://en.wiktionary.org/wiki/resist#English) — from Latin *resisto*, from *re-* + *sisto* "cause to stand".

## resistance

- Record: `{prefix:"re-", stem:"sist", suffix:"-ance", literal:"stand back", definition:"the act of fighting against something or refusing to accept it"}`
- Review: Confirmed `re-` + `sist` + `-ance`; replaced the electrical-only gloss.
- Reference: Wiktionary, [resistance](https://en.wiktionary.org/wiki/resistance#English) — from Old French *resistence*, from Latin *resistentia*; morphologically *resist* + *-ance*.
- Reference: Wiktionary (Latin), [resisto](https://en.wiktionary.org/wiki/resisto#Latin) — *resistō* = *re-* "back, again" + *sistō* "to stop; to stand".

## despicable

- Record: `{prefix:"de-", stem:"spec", suffix:"-able", literal:"look down", definition:"very unpleasant or bad, deserving to be looked down on"}`
- Review: Confirmed `de-` + `spec` + `-able` (Latin *-ābilis*).
- Reference: Wiktionary, [despicable](https://en.wiktionary.org/wiki/despicable#English) — from Late Latin *dēspicābilis*, from *dēspicor*, a variant of *dēspiciō* "to despise", from *de* "down" + *speciō* "to look at, behold".

## inspect

- Record: `{prefix:"in-", stem:"spec", suffix:null, literal:"look into", definition:"to look at something closely to check it"}`
- Review: Confirmed `in-` + `spec`.
- Reference: Wiktionary, [inspect](https://en.wiktionary.org/wiki/inspect#English) — from Latin *inspectum*, past participle of *inspicere* "to look into", from *in* "in" + *specere* "to look at".

## inspection

- Record: `{prefix:"in-", stem:"spec", suffix:"-ion", literal:"look into", definition:"a careful look to check something"}`
- Review: Confirmed `in-` + `spec` + `-ion`.
- Reference: Wiktionary, [inspection](https://en.wiktionary.org/wiki/inspection#English) — from Latin *īnspectiō* "examination, inspection", from *īnspiciō* "to inspect", from *speciō* "to look at".

## inspector

- Record: `{prefix:"in-", stem:"spec", suffix:"-or", literal:"look into", definition:"a person whose job is to check that things are done correctly"}`
- Review: Confirmed `in-` + `spec` + `-or`; replaced the police-rank gloss.
- Reference: Wiktionary, [inspector](https://en.wiktionary.org/wiki/inspector#English) — from Latin *īnspector*, from *īnspiciō*; *inspect* + *-or*.
- Reference: Wiktionary (Latin), [inspicio](https://en.wiktionary.org/wiki/inspicio#Latin) — *īnspiciō* = *in-* + *speciō*.

## perspective

- Record: `{prefix:"per-", stem:"spec", suffix:"-ive", literal:"look through", definition:"a particular way of thinking about something; a point of view"}`
- Review: Confirmed `per-` + `spec` + `-ive`.
- Reference: Wiktionary, [perspective](https://en.wiktionary.org/wiki/perspective#English) — from Latin *perspectivus* "of sight, optical", from *perspectus*, the past participle of *perspicere* "to inspect, look through", from *per-* "through" + *specere* "to look at".

## prospect

- Record: `{prefix:"pro-", stem:"spec", suffix:null, literal:"look forward", definition:"the chance that something will happen in the future"}`
- Review: Confirmed `pro-` + `spec`.
- Reference: Wiktionary, [prospect](https://en.wiktionary.org/wiki/prospect#English) — from Latin *prōspectus* "view, sight, prospect", from *prōspiciō* "to look forward", from *pro* "before, forward" + *speciō* "to look, to see".

## respect

- Record: `{prefix:"re-", stem:"spec", suffix:null, literal:"look back", definition:"admiration for someone, or care for their feelings and rights"}`
- Review: Confirmed `re-` + `spec`.
- Reference: Wiktionary, [respect](https://en.wiktionary.org/wiki/respect#English) — from Latin *respectus* "a looking at, regard, respect", perfect passive participle of *respiciō* "look at, look back upon, respect", from *re-* "back" + *speciō* "to see".

## respectable

- Record: `{prefix:"re-", stem:"spec", suffix:"-able", literal:"look back", definition:"behaving in a way that people think is good and proper"}`
- Review: Confirmed as *respect* + *-able*.
- Reference: Wiktionary, [respectable](https://en.wiktionary.org/wiki/respectable#English) — *respect* (verb) + *-able*.

## cooperate

- Record: `{prefix:"con-", stem:"oper", suffix:"-ate", literal:"work with", definition:"to work together with others"}`
- Review: Confirmed `con-` + `oper` + `-ate` (Latin *co-* is a form of *con-*).
- Reference: Wiktionary, [cooperate](https://en.wiktionary.org/wiki/cooperate#English) — from Late Latin *cooperātus*, perfect passive participle of *cooperor* "to work with".
- Reference: Wiktionary (Latin), [cooperor](https://en.wiktionary.org/wiki/cooperor#Latin) — *cooperor* = *con-* + *operor*.

## cooperation

- Record: `{prefix:"con-", stem:"oper", suffix:"-ion", literal:"work with", definition:"the act of working together with others"}`
- Review: Confirmed `con-` + `oper` + `-ion`.
- Reference: Wiktionary, [cooperation](https://en.wiktionary.org/wiki/cooperation#English) — from French *coopération*, from Late Latin *cooperātiō*; *cooperate* + *-ion*.

## cooperative

- Record: `{prefix:"con-", stem:"oper", suffix:"-ive", literal:"work with", definition:"willing to work together and help"}`
- Review: Confirmed as *co-* + *operative*.
- Reference: Wiktionary, [cooperative](https://en.wiktionary.org/wiki/cooperative#English) — *co-* + *operative*.

## operate

- Record: `{prefix:null, stem:"oper", suffix:"-ate", literal:"work", definition:"to make a machine work, or to do surgery"}`
- Review: Confirmed `oper` + `-ate`.
- Reference: Wiktionary, [operate](https://en.wiktionary.org/wiki/operate#English) — from Latin *operātus*, perfect passive participle of *operor* "to work, labor, toil, have effect".

## operation

- Record: `{prefix:null, stem:"oper", suffix:"-ion", literal:"work", definition:"an activity done to achieve something, or a medical surgery"}`
- Review: Confirmed `oper` + `-ion`.
- Reference: Wiktionary, [operation](https://en.wiktionary.org/wiki/operation#English) — from Latin *operātiō*, from the verb *operor* "to work", from *opus*, *operis* "work".

## operative

- Record: `{prefix:null, stem:"oper", suffix:"-ive", literal:"work", definition:"working or in effect"}`
- Review: Confirmed `oper` + `-ive`.
- Reference: Wiktionary, [operative](https://en.wiktionary.org/wiki/operative#English) — from Middle French *operatif* or its etymon Latin *operātīvus*; *operate* + *-ive*.

## operator

- Record: `{prefix:null, stem:"oper", suffix:"-or", literal:"work", definition:"a person who runs a machine or a phone system"}`
- Review: Confirmed `oper` + `-or`.
- Reference: Wiktionary, [operator](https://en.wiktionary.org/wiki/operator#English) — from Latin *operātor*, from *operor* "work, labour"; *operate* + *-or*.

## assessment

- Record: `{prefix:"ad-", stem:"sed", suffix:"-ment", literal:"sit by", definition:"a judgment about how good, bad, or valuable something is"}`
- Review: Confirmed `ad-` + `sed` + `-ment` via *assess*, from Latin *assideō* "to sit by". Literal changed from "sit to" to "sit by"; replaced the tax-value gloss.
- Reference: Wiktionary, [assessment](https://en.wiktionary.org/wiki/assessment#English) — *assess* + *-ment*.
- Reference: Wiktionary, [assess](https://en.wiktionary.org/wiki/assess#English) — from Medieval Latin *assessare*, originally the frequentative of Latin *assessus*, past participle of *assideō*.
- Reference: Wiktionary (Latin), [assideo](https://en.wiktionary.org/wiki/assideo#Latin) — *assideō* = *ad-* "to, towards, at" + *sedeō* "sit; settle down" ("to sit by").

## obsession

- Record: `{prefix:"ob-", stem:"sed", suffix:"-ion", literal:"sit against", definition:"an idea or interest that fills someone's mind all the time"}`
- Review: Confirmed `ob-` + `sed` + `-ion`.
- Reference: Wiktionary, [obsession](https://en.wiktionary.org/wiki/obsession#English) — from Latin *obsessio* "a besieging", from *obsidere* "to besiege"; *obsess* + *-ion*.
- Reference: Wiktionary, [obsess](https://en.wiktionary.org/wiki/obsess#English) — from Latin *obsessus*, perfect passive participle of *obsideō* "sit on or in, remain, besiege", from *ob-* "before" + *sedeō* "to sit".

## president

- Record: `{prefix:"pre-", stem:"sed", suffix:"-ent", literal:"sit before", definition:"the leader of a country, club, or company"}`
- Review: Confirmed `pre-` + `sed` + `-ent` (Latin *prae-*); widened the definition.
- Reference: Wiktionary, [president](https://en.wiktionary.org/wiki/president#English) — from Latin *praesidēns* "presiding over; president, leader", the present active participle of *praesideō* "preside over".
- Reference: Wiktionary (Latin), [praesideo](https://en.wiktionary.org/wiki/praesideo#Latin) — *praesideō* = *prae-* + *sedeō* "sit".

## residence

- Record: `{prefix:"re-", stem:"sed", suffix:"-ence", literal:"sit back", definition:"the place where someone lives"}`
- Review: Confirmed `re-` + `sed` + `-ence`.
- Reference: Wiktionary, [residence](https://en.wiktionary.org/wiki/residence#English) — from Medieval Latin *residentia*, from *residēns*, present participle of *resideō*; *reside* + *-ence*.
- Reference: Wiktionary (Latin), [resideo](https://en.wiktionary.org/wiki/resideo#Latin) — *resideō* = *re-* "back" + *sedeō* "sit, be situated".

## resident

- Record: `{prefix:"re-", stem:"sed", suffix:"-ent", literal:"sit back", definition:"a person who lives in a particular place"}`
- Review: Confirmed `re-` + `sed` + `-ent`; replaced the adjective gloss with the noun.
- Reference: Wiktionary, [resident](https://en.wiktionary.org/wiki/resident#English) — from Latin *residēns*, present participle of *resideō* "to remain behind, reside, dwell", from *re-* "back" + *sedeō* "to sit".

## sedative

- Record: `{prefix:null, stem:"sed", suffix:"-ive", literal:"sit", definition:"a medicine that makes someone calm or sleepy"}`
- Review: Confirmed `sed` + `-ive` with a caveat: it comes through *sedate*, from Latin *sēdō* "to allay, calm", which the Latin entry derives from *sedeō*.
- Reference: Wiktionary, [sedative](https://en.wiktionary.org/wiki/sedative#English) — from Medieval Latin *sēdātīvus*; *sedate* + *-ive*.
- Reference: Wiktionary, [sedate](https://en.wiktionary.org/wiki/sedate#English) — from Latin *sēdātus* "calm, quiet, composed", participial adjective from *sēdō* "to allay".
- Reference: Wiktionary (Latin), [sedo](https://en.wiktionary.org/wiki/sedo#Latin) — *sēdō*: derived from *sedeō*.

## session

- Record: `{prefix:null, stem:"sed", suffix:"-ion", literal:"sit", definition:"a period of time spent doing a particular activity"}`
- Review: Confirmed `sed` + `-ion`.
- Reference: Wiktionary, [session](https://en.wiktionary.org/wiki/session#English) — from Latin *sessiō* "a sitting", from *sedeō* "sit".

## depression

- Record: `{prefix:"de-", stem:"press", suffix:"-ion", literal:"press down", definition:"a deep feeling of sadness that lasts a long time, or a hollow in the ground"}`
- Review: Confirmed `de-` + `press` + `-ion`.
- Reference: Wiktionary, [depression](https://en.wiktionary.org/wiki/depression#English) — from Latin *dēpressiō*; *depress* + *-ion*.
- Reference: Wiktionary (Latin), [deprimo](https://en.wiktionary.org/wiki/deprimo#Latin) — *dēprimō* = *dē-* + *premō*.

## express

- Record: `{prefix:"ex-", stem:"press", suffix:null, literal:"press out of", definition:"to show or tell what you think or feel"}`
- Review: Confirmed `ex-` + `press`; replaced the delivery-service noun sense with the verb.
- Reference: Wiktionary, [express](https://en.wiktionary.org/wiki/express#English) — from Old French *espresser*, *expresser*, from frequentative form of Latin *exprimere*.
- Reference: Wiktionary (Latin), [exprimo](https://en.wiktionary.org/wiki/exprimo#Latin) — *exprimō* = *ex-* "out of, from" + *premō* "press".

## expression

- Record: `{prefix:"ex-", stem:"press", suffix:"-ion", literal:"press out of", definition:"the look on someone's face, or a way of showing a feeling"}`
- Review: Confirmed `ex-` + `press` + `-ion`.
- Reference: Wiktionary, [expression](https://en.wiktionary.org/wiki/expression#English) — from Late Latin *expressiō* "a pressing out"; *express* + *-ion*.

## impress

- Record: `{prefix:"in-", stem:"press", suffix:null, literal:"press into", definition:"to make someone admire you"}`
- Review: Confirmed `in-` + `press`; replaced the circular definition.
- Reference: Wiktionary, [impress](https://en.wiktionary.org/wiki/impress#English) — from Latin *impressus*, perfect passive participle of *imprimere* "to press into or upon, stick, stamp", from *in* "in, upon" + *premere* "to press".

## impression

- Record: `{prefix:"in-", stem:"press", suffix:"-ion", literal:"press into", definition:"an idea or feeling you get about someone or something"}`
- Review: Confirmed `in-` + `press` + `-ion`.
- Reference: Wiktionary, [impression](https://en.wiktionary.org/wiki/impression#English) — from Latin *impressio*; *impress* + *-ion*.
- Reference: Wiktionary (Latin), [imprimo](https://en.wiktionary.org/wiki/imprimo#Latin) — *imprimō* = *in-* + *premō* "to press".

## impressive

- Record: `{prefix:"in-", stem:"press", suffix:"-ive", literal:"press into", definition:"so good that people admire it"}`
- Review: Confirmed as *impress* + *-ive*.
- Reference: Wiktionary, [impressive](https://en.wiktionary.org/wiki/impressive#English) — *impress* + *-ive*.

## pressure

- Record: `{prefix:null, stem:"press", suffix:"-ure", literal:"press", definition:"the force of pressing on something"}`
- Review: Confirmed `press` + `-ure` (Latin *pressūra*).
- Reference: Wiktionary, [pressure](https://en.wiktionary.org/wiki/pressure#English) — from Latin *pressūra*.
- Reference: Wiktionary (Latin), [pressura](https://en.wiktionary.org/wiki/pressura#Latin) — *pressūra* = *premō* "to squeeze, press" + *-tūra*.

## application

- Record: `{prefix:"ad-", stem:"plic", suffix:"-ion", literal:"fold to", definition:"a form you fill out to ask for something, or the act of putting something to use"}`
- Review: Confirmed `ad-` + `plic` + `-ion` (Latin *applicō*). The English entry analyses it as *apply* + *-ication*; the `-ion` record follows the Latin *applicātiō* (stem *applicāt-* + *-iō*), a simplified mapping.
- Reference: Wiktionary, [application](https://en.wiktionary.org/wiki/application#English) — from Latin *applicātiōnem*, accusative singular of *applicātiō* "attachment"; *apply* + *-ication*.
- Reference: Wiktionary (Latin), [applico](https://en.wiktionary.org/wiki/applico#Latin) — *applicō* = *ad-* + *plicō* "fold; arrive".

## apply

- Record: `{prefix:"ad-", stem:"plic", suffix:null, literal:"fold to", definition:"to ask formally for something, or to put something to use"}`
- Review: Confirmed `ad-` + `plic` via *applicant*/Latin *applicāre*.
- Reference: Wiktionary, [apply](https://en.wiktionary.org/wiki/apply#English) — see *applicant*.
- Reference: Wiktionary, [applicant](https://en.wiktionary.org/wiki/applicant#English) — from Latin *applicans*, present participle of *applicare*.
- Reference: Wiktionary (Latin), [applico](https://en.wiktionary.org/wiki/applico#Latin) — *applicō* = *ad-* + *plicō* "fold; arrive".

## reply

- Record: `{prefix:"re-", stem:"plic", suffix:null, literal:"fold back", definition:"to answer someone"}`
- Review: Confirmed `re-` + `plic`.
- Reference: Wiktionary, [reply](https://en.wiktionary.org/wiki/reply#English) — from Old French *replier* "to reply", from Latin *replicō* "to fold back" (in Late or Medieval Latin "to reply, repeat"), from *re* + *plicō* "to fold".

## command

- Record: `{prefix:"con-", stem:"man", suffix:null, literal:"entrust", definition:"an order telling someone to do something"}`
- Review: Confirmed `con-` + `man`: *commendō* is *con-* + *mandō*, and *mandō* is *manus* "hand" + *-dō* ("hand over"). Literal changed from "hand with" to "entrust".
- Reference: Wiktionary, [command](https://en.wiktionary.org/wiki/command#English) — from Late Latin *commandāre*, from Latin *commendāre*; ultimately from *com-* + *mandō*.
- Reference: Wiktionary (Latin), [mando](https://en.wiktionary.org/wiki/mando#Latin) — *mandō*: equivalent to *manus* + *-dō*.
- Reference: Wiktionary (Latin), [commendo](https://en.wiktionary.org/wiki/commendo#Latin) — *commendō* = *con-* + *mandō* "commit, entrust, enjoin".

## commandant

- Record: `{prefix:"con-", stem:"man", suffix:"-ant", literal:"entrust", definition:"an officer in charge of a military base or unit"}`
- Review: Confirmed as French *commandant*, the present participle of French *commander* (the `-ant` ending); see *command*. Literal changed to "entrust".
- Reference: Wiktionary, [commandant](https://en.wiktionary.org/wiki/commandant#English) — from French *commandant*, from *commander*.
- Reference: Wiktionary (French), [commandant](https://en.wiktionary.org/wiki/commandant#French) — present participle of *commander*.

## commander

- Record: `{prefix:"con-", stem:"man", suffix:"-er", literal:"entrust", definition:"a person who is in charge, especially in the army or navy"}`
- Review: Confirmed as *command* + *-er*; see *command*. Literal changed to "entrust".
- Reference: Wiktionary, [commander](https://en.wiktionary.org/wiki/commander#English) — from Old French *comandeor*, from *comander*; *command* + *-er*.

## demand

- Record: `{prefix:"de-", stem:"man", suffix:null, literal:"hand over", definition:"to ask for something firmly"}`
- Review: Confirmed `de-` + `man` (Latin *dēmandō*, *dē-* + *mandō* "hand over"). Literal changed from "hand down" to "hand over".
- Reference: Wiktionary, [demand](https://en.wiktionary.org/wiki/demand#English) — from Old French *demander*, from Latin *dēmandō*, *dēmandāre*.
- Reference: Wiktionary (Latin), [demando](https://en.wiktionary.org/wiki/demando#Latin) — *dēmandō* = *dē-* + *mandō* "hand over; I entrust".

## mandatory

- Record: `{prefix:null, stem:"man", suffix:"-ory", literal:"hand over", definition:"required by a rule or law"}`
- Review: Confirmed `man` + `-ory` via Latin *mandātōrius*, from *mandātor*, from *mandō* (*manus* + *-dō*). Literal changed from "hand" to "hand over".
- Reference: Wiktionary, [mandatory](https://en.wiktionary.org/wiki/mandatory#English) — from Late Latin *mandatorius* "of or belonging to a mandator", from *mandātor* "one who commands"; *mandate* + *-ory*.
- Reference: Wiktionary (Latin), [mando](https://en.wiktionary.org/wiki/mando#Latin) — *mandō*: equivalent to *manus* + *-dō*.

## manual

- Record: `{prefix:null, stem:"man", suffix:"-al", literal:"hand", definition:"done with the hands; also, a book of instructions"}`
- Review: Confirmed `man` + `-al`.
- Reference: Wiktionary, [manual](https://en.wiktionary.org/wiki/manual#English) — from Latin *manuālis*, from *manus* "hand"; the noun from Late Latin *manuāle* "handbook, manual".

## construction

- Record: `{prefix:"con-", stem:"struct", suffix:"-ion", literal:"build with", definition:"the work of building something"}`
- Review: Confirmed `con-` + `struct` + `-ion`.
- Reference: Wiktionary, [construction](https://en.wiktionary.org/wiki/construction#English) — from Latin *cōnstructiō*, from *cōnstruō*, *cōnstruere*; *construct* + *-ion*.
- Reference: Wiktionary (Latin), [construo](https://en.wiktionary.org/wiki/construo#Latin) — *cōnstruō* = *con-* "with" + *struō* "pile up, arrange; build, erect".

## destruction

- Record: `{prefix:"de-", stem:"struct", suffix:"-ion", literal:"tear down", definition:"the act of badly damaging or ruining something"}`
- Review: Confirmed `de-` + `struct` + `-ion`. Literal changed from "build down" to "tear down", the source's gloss of *dēstruō*.
- Reference: Wiktionary, [destruction](https://en.wiktionary.org/wiki/destruction#English) — from Latin *dēstrūctiō*.
- Reference: Wiktionary, [destructive](https://en.wiktionary.org/wiki/destructive#English) — from Latin *dēstruō*, *dēstruere* "to tear down, destroy".
- Reference: Wiktionary (Latin), [destruo](https://en.wiktionary.org/wiki/destruo#Latin) — *dēstruō* = *dē-* + *struō* "put together".

## destructive

- Record: `{prefix:"de-", stem:"struct", suffix:"-ive", literal:"tear down", definition:"causing a lot of damage"}`
- Review: Confirmed `de-` + `struct` + `-ive`. Literal changed from "build down" to "tear down".
- Reference: Wiktionary, [destructive](https://en.wiktionary.org/wiki/destructive#English) — from Latin *dēstrūctīvus*, from past participle of *dēstruō*, *dēstruere* "to tear down, destroy" + *-īvus*.

## instruction

- Record: `{prefix:"in-", stem:"struct", suffix:"-ion", literal:"build into", definition:"information that tells you how to do something"}`
- Review: Confirmed `in-` + `struct` + `-ion`; replaced "the profession of a teacher".
- Reference: Wiktionary, [instruction](https://en.wiktionary.org/wiki/instruction#English) — from Latin *instructio*; *instruct* + *-ion*.
- Reference: Wiktionary (Latin), [instruo](https://en.wiktionary.org/wiki/instruo#Latin) — *īnstruō* = *in-* "in, at, on" + *struō* "pile up, arrange; construct".

## instructor

- Record: `{prefix:"in-", stem:"struct", suffix:"-or", literal:"build into", definition:"a person who teaches a skill"}`
- Review: Confirmed `in-` + `struct` + `-or`.
- Reference: Wiktionary, [instructor](https://en.wiktionary.org/wiki/instructor#English) — from Latin *instructor*; *instruct* + *-or*.
- Reference: Wiktionary (Latin), [instruo](https://en.wiktionary.org/wiki/instruo#Latin) — *īnstruō* = *in-* "in, at, on" + *struō* "pile up, arrange; construct".

## structure

- Record: `{prefix:null, stem:"struct", suffix:"-ure", literal:"build", definition:"something that has been built, or the way the parts of something are arranged"}`
- Review: Confirmed `struct` + `-ure`.
- Reference: Wiktionary, [structure](https://en.wiktionary.org/wiki/structure#English) — from Latin *structūra* "a fitting together, adjustment, building, erection", from *struere*, past participle *structus* "pile up, arrange, assemble, build".

## convict

- Record: `{prefix:"con-", stem:"vinc", suffix:null, literal:"conquer with", definition:"to decide in a court of law that someone is guilty of a crime"}`
- Review: Confirmed `con-` + `vinc`.
- Reference: Wiktionary, [convict](https://en.wiktionary.org/wiki/convict#English) — from Latin *convictus*, the past participle of *convincō* "to convict"; doublet of *convince*.
- Reference: Wiktionary (Latin), [convinco](https://en.wiktionary.org/wiki/convinco#Latin) — *convincō* = *con-* + *vincō* "conquer, win".

## conviction

- Record: `{prefix:"con-", stem:"vinc", suffix:"-ion", literal:"conquer with", definition:"a strong belief, or a court's decision that someone is guilty"}`
- Review: Confirmed `con-` + `vinc` + `-ion`.
- Reference: Wiktionary, [conviction](https://en.wiktionary.org/wiki/conviction#English) — from Latin *convictiō*, from *convictus*, the past participle of *convincō* "to convict"; *convict* + *-ion*.

## convince

- Record: `{prefix:"con-", stem:"vinc", suffix:null, literal:"conquer with", definition:"to make someone believe that something is true"}`
- Review: Confirmed `con-` + `vinc`.
- Reference: Wiktionary, [convince](https://en.wiktionary.org/wiki/convince#English) — from Latin *convincō* "to refute, prove", from *con-* + *vincō* "to conquer, vanquish".

## invincible

- Record: `{prefix:"in-", stem:"vinc", suffix:"-ible", literal:"not conquer", definition:"too strong to be defeated"}`
- Review: Confirmed `in-` (not) + `vinc` + `-ible` (Latin *-ibilis*).
- Reference: Wiktionary, [invincible](https://en.wiktionary.org/wiki/invincible#English) — from Latin *invincibilis* "unconquerable", from *in-* "not" + *vincibilis* "conquerable", from *vincere* "to conquer".

## victor

- Record: `{prefix:null, stem:"vinc", suffix:"-or", literal:"conquer", definition:"the winner of a battle or contest"}`
- Review: Confirmed `vinc` + `-or` (Latin *victor* = *vincō* + *-tor*).
- Reference: Wiktionary, [victor](https://en.wiktionary.org/wiki/victor#English) — from Latin *victor* "conqueror".
- Reference: Wiktionary (Latin), [victor](https://en.wiktionary.org/wiki/victor#Latin) — *victor* = *vincō* "to conquer" (supine stem *vict-*) + *-tor*.

## acquire

- Record: `{prefix:"ad-", stem:"quir", suffix:null, literal:"seek to", definition:"to get or gain something"}`
- Review: Confirmed `ad-` + `quir` (Latin *quaerō* "seek"). Literal changed from "ask to" to "seek to".
- Reference: Wiktionary, [acquire](https://en.wiktionary.org/wiki/acquire#English) — from Latin *acquirō*; *ad-* + *quaerō* "to seek for".

## conquest

- Record: `{prefix:"con-", stem:"quir", suffix:null, literal:"seek with", definition:"the act of taking control of a place or people by force"}`
- Review: Confirmed `con-` + `quir` via *conquer*, from Late Latin *conquaerere* (*con-* + *quaerō*). Literal changed from "ask with" to "seek with".
- Reference: Wiktionary, [conquest](https://en.wiktionary.org/wiki/conquest#English) — from Middle English *conquest* (noun), from Old French; related verb *conquesten*.
- Reference: Wiktionary, [conquer](https://en.wiktionary.org/wiki/conquer#English) — from Old French *conquerre*, from Late Latin *conquaero*, *conquaerere* "to search for, procure", from *con-* + *quaero*, *quaerere* "to seek, acquire".

## question

- Record: `{prefix:null, stem:"quir", suffix:"-ion", literal:"ask", definition:"a sentence that asks for information"}`
- Review: Confirmed `quir` + `-ion` (Latin *quaestiō*); replaced the circular gloss.
- Reference: Wiktionary, [question](https://en.wiktionary.org/wiki/question#English) — from Latin *quaestiōnem*, accusative of *quaestiō* "a seeking, investigation, inquiry, question", from *quaerere* "to seek, ask, inquire".

## request

- Record: `{prefix:"re-", stem:"quir", suffix:null, literal:"ask back", definition:"the act of asking politely for something"}`
- Review: Confirmed `re-` + `quir`.
- Reference: Wiktionary, [request](https://en.wiktionary.org/wiki/request#English) — from Vulgar Latin *\*requaesita*, from Latin *requīsīta*, feminine of *requīsītus* "requested, demanded", past participle of *requīrō* "require, ask".

## require

- Record: `{prefix:"re-", stem:"quir", suffix:null, literal:"seek back", definition:"to need something"}`
- Review: Confirmed `re-` + `quir`. Literal changed from "ask back" to "seek back", the source's literal gloss.
- Reference: Wiktionary, [require](https://en.wiktionary.org/wiki/require#English) — from Latin *requīrō* "to require, seek, ask for" (literally "to seek back"), from *re-* "back; again" + *quaerō* "to seek".

## consequence

- Record: `{prefix:"con-", stem:"sequ", suffix:"-ence", literal:"follow with", definition:"a result of something that happened earlier"}`
- Review: Confirmed `con-` + `sequ` + `-ence`; replaced the adjective-like gloss.
- Reference: Wiktionary, [consequence](https://en.wiktionary.org/wiki/consequence#English) — from Old French *consequence*, from Latin *consequentia*; analysable as *con-* + *sequence*.
- Reference: Wiktionary (Latin), [consequor](https://en.wiktionary.org/wiki/consequor#Latin) — *cōnsequor* = *con-* + *sequor* "to follow".

## prosecution

- Record: `{prefix:"pro-", stem:"sequ", suffix:"-ion", literal:"follow forward", definition:"the act of taking someone to court for a crime"}`
- Review: Confirmed `pro-` + `sequ` + `-ion`; chose the legal sense learners meet.
- Reference: Wiktionary, [prosecution](https://en.wiktionary.org/wiki/prosecution#English) — from Late Latin *prōsecutio*, from *prōsequor* "follow, pursue", from *pro-* "onward" + *sequor* "follow".

## prosecutor

- Record: `{prefix:"pro-", stem:"sequ", suffix:"-or", literal:"follow forward", definition:"a lawyer who tries to prove in court that someone is guilty"}`
- Review: Confirmed `pro-` + `sequ` + `-or`.
- Reference: Wiktionary, [prosecutor](https://en.wiktionary.org/wiki/prosecutor#English) — from Medieval Latin *prosecutor*, from *prōsequor*; *prosecute* + *-or*.
- Reference: Wiktionary (Latin), [prosequor](https://en.wiktionary.org/wiki/prosequor#Latin) — *prōsequor* = *prō-* + *sequor* "follow".

## sequence

- Record: `{prefix:null, stem:"sequ", suffix:"-ence", literal:"follow", definition:"a set of things that follow each other in a particular order"}`
- Review: Confirmed `sequ` + `-ence`.
- Reference: Wiktionary, [sequence](https://en.wiktionary.org/wiki/sequence#English) — from Late Latin *sequentia* "a following", from *sequēns* "following", from *sequī* "to follow".

## suitable

- Record: `{prefix:null, stem:"sequ", suffix:"-able", literal:"follow", definition:"right or good for a particular purpose"}`
- Review: Confirmed `sequ` + `-able` with a caveat: *suitable* is *suit* + *-able*, and *suit* comes from Anglo-Norman *suite*, from Vulgar Latin *\*sequita*, from *sequor*.
- Reference: Wiktionary, [suitable](https://en.wiktionary.org/wiki/suitable#English) — *suit* + *-able*.
- Reference: Wiktionary (Middle English), [sute](https://en.wiktionary.org/wiki/sute#Middle_English) — (Middle English *sute*) borrowed from Anglo-Norman *suite*, from Vulgar Latin *\*sequita*, from Latin *sequor*.

## current

- Record: `{prefix:null, stem:"curr", suffix:"-ent", literal:"run", definition:"happening now; also, a flow of water, air, or electricity"}`
- Review: Confirmed `curr` + `-ent`.
- Reference: Wiktionary, [current](https://en.wiktionary.org/wiki/current#English) — from Old French *corant*, present participle of *courre* "to run", from Latin *currō*, *currere* "to run".

## occur

- Record: `{prefix:"ob-", stem:"curr", suffix:null, literal:"run against", definition:"to happen"}`
- Review: Confirmed `ob-` + `curr`.
- Reference: Wiktionary, [occur](https://en.wiktionary.org/wiki/occur#English) — from Latin *occurrō* "run to meet, run against, befall, present itself" from *ob-* "against" + *currō* "run, hurry, move".

## security

- Record: `{prefix:"se-", stem:"cur", suffix:"-ity", literal:"without care", definition:"the state of being safe and protected"}`
- Review: Corrected the stem from `curr` (run) to `cur` (care): *security* comes from Latin *sēcūrus* = *sē-* "without" + *cūra* "care". Literal changed from "run apart" to "without care". The shared `se-` prefix gloss was widened from "apart, aside" to "apart, aside, without" so the game teaches the sense used here.
- Reference: Wiktionary, [security](https://en.wiktionary.org/wiki/security#English) — from Latin *sēcūritās*, from *sēcūrus* "safe, secure", from *sē-* "without" + *cūra* "care".
- Reference: Wiktionary (Latin), [securus](https://en.wiktionary.org/wiki/securus#Latin) — *sēcūrus* = *sē-* "without" + *cūra* "care".

## evolve

- Record: `{prefix:"ex-", stem:"volv", suffix:null, literal:"roll out of", definition:"to develop slowly over time"}`
- Review: Confirmed `ex-` + `volv` (Latin *ē-* is a short form of *ex*).
- Reference: Wiktionary, [evolve](https://en.wiktionary.org/wiki/evolve#English) — from Latin *ēvolvō* "unroll, unfold", from *ē-* "out of" (short form of *ex*) + *volvō* "roll".

## involve

- Record: `{prefix:"in-", stem:"volv", suffix:null, literal:"roll into", definition:"to include someone or something as a part"}`
- Review: Confirmed `in-` + `volv`.
- Reference: Wiktionary, [involve](https://en.wiktionary.org/wiki/involve#English) — from Late Middle English *involven* "to cloud; to encumber; to envelop, surround", from Old French *involver*.
- Reference: Wiktionary (Latin), [involvo](https://en.wiktionary.org/wiki/involvo#Latin) — *involvō* = *in-* "in, at, on" + *volvō* "roll".

## involvement

- Record: `{prefix:"in-", stem:"volv", suffix:"-ment", literal:"roll into", definition:"the act of taking part in something"}`
- Review: Confirmed as *involve* + *-ment*.
- Reference: Wiktionary, [involvement](https://en.wiktionary.org/wiki/involvement#English) — *involve* + *-ment*.

## revolution

- Record: `{prefix:"re-", stem:"volv", suffix:"-ion", literal:"roll back", definition:"a big, sudden change, especially in how a country is ruled; also, one full turn"}`
- Review: Confirmed `re-` + `volv` + `-ion`.
- Reference: Wiktionary, [revolution](https://en.wiktionary.org/wiki/revolution#English) — from Late Latin *revolūtiō* "the act of revolving; revolution", from *revolvō* "roll back, revolve".

## revolver

- Record: `{prefix:"re-", stem:"volv", suffix:"-er", literal:"roll back", definition:"a type of handgun with a turning cylinder that holds bullets"}`
- Review: Confirmed as *revolve* + *-er*.
- Reference: Wiktionary, [revolver](https://en.wiktionary.org/wiki/revolver#English) — from *revolve* + *-er* (agent noun).
- Reference: Wiktionary (Latin), [revolvo](https://en.wiktionary.org/wiki/revolvo#Latin) — *revolvō* = *re-* "back, again" + *volvō* "roll".

## general

- Record: `{prefix:null, stem:"gen", suffix:"-al", literal:"kind", definition:"about most people or things, not specific details; also, a top army officer"}`
- Review: Confirmed `gen` + `-al` (Latin *generālis*, from *genus* "class, kind"). Literal changed from "birth" to "kind", the source's gloss of *genus* here.
- Reference: Wiktionary, [general](https://en.wiktionary.org/wiki/general#English) — from Latin *generālis*, from *genus* "class, kind" + *-ālis* "-al".

## generate

- Record: `{prefix:null, stem:"gen", suffix:"-ate", literal:"birth", definition:"to produce or create something"}`
- Review: Confirmed `gen` + `-ate` (Latin *generō*, from *genus* "descent, origin, birth").
- Reference: Wiktionary, [generate](https://en.wiktionary.org/wiki/generate#English) — from Latin *generō* "beget, procreate, produce" + *-ate*, from *genus* "a kind, race, family".
- Reference: Wiktionary (Latin), [genero](https://en.wiktionary.org/wiki/genero#Latin) — *generō* = *genus* "descent, origin, birth" + *-ō*.

## generation

- Record: `{prefix:null, stem:"gen", suffix:"-ion", literal:"birth", definition:"all the people born around the same time"}`
- Review: Confirmed `gen` + `-ion`.
- Reference: Wiktionary, [generation](https://en.wiktionary.org/wiki/generation#English) — from Latin *generātiō*, from *generō*, *generāre* "to beget, generate"; *generate* + *-ion*.

## generator

- Record: `{prefix:null, stem:"gen", suffix:"-or", literal:"birth", definition:"a machine that produces electricity"}`
- Review: Confirmed `gen` + `-or`.
- Reference: Wiktionary, [generator](https://en.wiktionary.org/wiki/generator#English) — from the past participle of Latin *genero* "beget, father"; *generate* + *-or*.

## generous

- Record: `{prefix:null, stem:"gen", suffix:"-ous", literal:"birth", definition:"happy to give more than is expected"}`
- Review: Confirmed `gen` + `-ous` (Latin *generōsus* "of noble birth").
- Reference: Wiktionary, [generous](https://en.wiktionary.org/wiki/generous#English) — from Middle French *genereux*, and its source, Latin *generōsus* "of noble birth", from *genus* "race, stock".
- Reference: Wiktionary (Latin), [generosus](https://en.wiktionary.org/wiki/generosus#Latin) — *generōsus* = *genus* "birth, origin" + *-ōsus*.

## affirmative

- Record: `{prefix:"ad-", stem:"firm", suffix:"-ive", literal:"make firm", definition:"saying or showing that something is true; saying yes"}`
- Review: Confirmed `ad-` + `firm` + `-ive` (Latin *affirmō* "strengthen"). Literal changed from "strong to" to "make firm"; replaced "expecting the best".
- Reference: Wiktionary, [affirmative](https://en.wiktionary.org/wiki/affirmative#English) — from Latin *affirmativus*, from *affirmare* "to assert".
- Reference: Wiktionary (Latin), [affirmo](https://en.wiktionary.org/wiki/affirmo#Latin) — *affirmō* = *ad-* "to, towards, at" + *firmō* "strengthen, fortify".

## confirm

- Record: `{prefix:"con-", stem:"firm", suffix:null, literal:"make firm", definition:"to show or say that something is definitely true"}`
- Review: Confirmed `con-` + `firm`. Literal changed from "strong with" to "make firm", the source's gloss of *cōnfirmāre*.
- Reference: Wiktionary, [confirm](https://en.wiktionary.org/wiki/confirm#English) — from Latin *cōnfirmāre* "to make firm, strengthen, establish", from *con-* "together" + *firmāre* "to make firm", from *firmus* "firm".

## confirmation

- Record: `{prefix:"con-", stem:"firm", suffix:"-ion", literal:"make firm", definition:"proof or a statement that something is true"}`
- Review: Confirmed `con-` + `firm` + `-ion`. Literal changed to "make firm".
- Reference: Wiktionary, [confirmation](https://en.wiktionary.org/wiki/confirmation#English) — from Latin *cōnfirmātiō*, noun of process from *cōnfirmātus* "confirmed", perfect passive participle of *cōnfirmāre*.

## infirmary

- Record: `{prefix:"in-", stem:"firm", suffix:"-ary", literal:"not strong", definition:"a place where sick or injured people are cared for, such as in a school"}`
- Review: Confirmed `in-` (not) + `firm` + `-ary` via Latin *infirmus* "weak". Literal changed from "strong into" to "not strong".
- Reference: Wiktionary, [infirmary](https://en.wiktionary.org/wiki/infirmary#English) — from Medieval Latin *infirmaria*, from Latin *infirmus*.
- Reference: Wiktionary (Latin), [infirmus](https://en.wiktionary.org/wiki/infirmus#Latin) — *infirmus* = *in-* "not" + *firmus* "strong, firm"; "weak, feeble".

## aggression

- Record: `{prefix:"ad-", stem:"grad", suffix:"-ion", literal:"step to", definition:"angry or violent behavior toward others"}`
- Review: Confirmed `ad-` + `grad` + `-ion`.
- Reference: Wiktionary, [aggression](https://en.wiktionary.org/wiki/aggression#English) — from Latin *aggressio*, from *aggressus*, past participle of *aggredior* "to approach, address, attack".
- Reference: Wiktionary (Latin), [aggredior](https://en.wiktionary.org/wiki/aggredior#Latin) — *aggredior* = *ad-* "to" + *gradior* "step, walk".

## aggressive

- Record: `{prefix:"ad-", stem:"grad", suffix:"-ive", literal:"step to", definition:"ready or likely to attack or argue"}`
- Review: Confirmed as *aggress* + *-ive*; replaced "tending to spread quickly".
- Reference: Wiktionary, [aggressive](https://en.wiktionary.org/wiki/aggressive#English) — *aggress* + *-ive*.
- Reference: Wiktionary (Latin), [aggredior](https://en.wiktionary.org/wiki/aggredior#Latin) — *aggredior* = *ad-* "to" + *gradior* "step, walk".

## congress

- Record: `{prefix:"con-", stem:"grad", suffix:null, literal:"step together", definition:"a group of people chosen to make a country's laws"}`
- Review: Confirmed `con-` + `grad`. Literal changed from "step with" to "step together", matching *congredior* "to go, come together".
- Reference: Wiktionary, [congress](https://en.wiktionary.org/wiki/congress#English) — from Latin *congressum*, the past participle of *congredior* "to go, come together", itself from *con-* + *gradior* "to go, step".

## progress

- Record: `{prefix:"pro-", stem:"grad", suffix:null, literal:"step forward", definition:"movement forward, or improvement over time"}`
- Review: Confirmed `pro-` + `grad`.
- Reference: Wiktionary, [progress](https://en.wiktionary.org/wiki/progress#English) — from Latin *prōgressus* "an advance", from the participle stem of *prōgredī* "to go forward, advance, develop", from *pro-* + *gradior*.

## compartment

- Record: `{prefix:"con-", stem:"part", suffix:"-ment", literal:"share with", definition:"a separate section inside a container or space"}`
- Review: Confirmed `con-` + `part` + `-ment` (Late Latin *compartior* "to share with").
- Reference: Wiktionary, [compartment](https://en.wiktionary.org/wiki/compartment#English) — from Middle French *compartiment*, from Italian *compartimento*, from Late Latin *compartior*, *compartiri* "to divide with, to share with".
- Reference: Wiktionary (Latin), [compartior](https://en.wiktionary.org/wiki/compartior#Latin) — *compartior* = *con-* + *partior*: "to share (divide with another)".

## depart

- Record: `{prefix:"de-", stem:"part", suffix:null, literal:"share away", definition:"to leave"}`
- Review: Confirmed `de-` + `part` (Late Latin *dēpartiō* "to divide"). Literal changed from "share down" to "share away", matching the source's gloss of *dē-* ("away from") and the `de-` family note.
- Reference: Wiktionary, [depart](https://en.wiktionary.org/wiki/depart#English) — from Old French *departir*, from Late Latin *departiō* "to divide", from *dē* "away from" + *partiō* "part, divide".

## department

- Record: `{prefix:"de-", stem:"part", suffix:"-ment", literal:"share away", definition:"a section of a large organization, store, or school"}`
- Review: Confirmed `de-` + `part` + `-ment` via French *département*. Literal changed to "share away".
- Reference: Wiktionary, [department](https://en.wiktionary.org/wiki/department#English) — from Middle French *département*; later senses from Modern French *département*.
- Reference: Wiktionary (Latin), [departio](https://en.wiktionary.org/wiki/departio#Latin) — *dēpartiō* = *dē-* "away from" + *partiō* "part, divide".

## departure

- Record: `{prefix:"de-", stem:"part", suffix:"-ure", literal:"share away", definition:"the act of leaving"}`
- Review: Confirmed as *depart* + *-ure*. Literal changed to "share away".
- Reference: Wiktionary, [departure](https://en.wiktionary.org/wiki/departure#English) — from Old French *deporteure* "departure"; *depart* + *-ure*.

## concern

- Record: `{prefix:"con-", stem:"cern", suffix:null, literal:"sift together", definition:"a feeling of worry, or something that matters to you"}`
- Review: Confirmed `con-` + `cern`. Literal changed from "separate with" to "sift together", the source's gloss of Latin *concernō*.
- Reference: Wiktionary, [concern](https://en.wiktionary.org/wiki/concern#English) — from Medieval Latin *concernō* "I distinguish, have respect to", from Latin *concernō* "to mix, sift, or mingle together, as in a sieve", combined form of *con-* + *cernō* "distinguish".

## discretion

- Record: `{prefix:"dis-", stem:"cern", suffix:"-ion", literal:"separate apart", definition:"the freedom to decide what to do; also, care in keeping things private"}`
- Review: Confirmed `dis-` + `cern` + `-ion`; replaced "refined taste".
- Reference: Wiktionary, [discretion](https://en.wiktionary.org/wiki/discretion#English) — from Late Latin *discrētiō*, from Latin *discerno*; *discreet* + *-ion*.
- Reference: Wiktionary (Latin), [discerno](https://en.wiktionary.org/wiki/discerno#Latin) — *discernō* = *dis-* "asunder, apart" + *cernō* "to see, discern".

## secret

- Record: `{prefix:"se-", stem:"cern", suffix:null, literal:"set apart", definition:"something kept hidden from others"}`
- Review: Confirmed `se-` + `cern` via Latin *sēcrētum*/*sēcernō*. Literal changed from "separate apart" to "set apart".
- Reference: Wiktionary, [secret](https://en.wiktionary.org/wiki/secret#English) — from Latin *sēcrētum*.
- Reference: Wiktionary, [secretary](https://en.wiktionary.org/wiki/secretary#English) — from Latin *secrētus* "private, secret", past participle of *secerno* "to separate, set apart".
- Reference: Wiktionary (Latin), [secerno](https://en.wiktionary.org/wiki/secerno#Latin) — *sēcernō* = *sē-* "aside" + *cernō* "to see, to discern".

## secretary

- Record: `{prefix:"se-", stem:"cern", suffix:"-ary", literal:"set apart", definition:"a person whose job is to handle letters, records, and appointments"}`
- Review: Confirmed `se-` + `cern` + `-ary`. Literal changed to "set apart".
- Reference: Wiktionary, [secretary](https://en.wiktionary.org/wiki/secretary#English) — from Medieval Latin *secrētārius* "one entrusted with secrets", from Latin *secrētus* "private, secret", past participle of *secerno* "to separate, set apart".

## conclude

- Record: `{prefix:"con-", stem:"clud", suffix:null, literal:"close with", definition:"to bring something to an end, or to decide after thinking"}`
- Review: Confirmed `con-` + `clud`.
- Reference: Wiktionary, [conclude](https://en.wiktionary.org/wiki/conclude#English) — from Latin *conclūdō*, *conclūdere* "to shut up, close, end".
- Reference: Wiktionary (Latin), [concludo](https://en.wiktionary.org/wiki/concludo#Latin) — *conclūdō* = *con-* + *claudō*.

## conclusion

- Record: `{prefix:"con-", stem:"clud", suffix:"-ion", literal:"close with", definition:"the end of something, or a decision reached by thinking"}`
- Review: Confirmed `con-` + `clud` + `-ion`.
- Reference: Wiktionary, [conclusion](https://en.wiktionary.org/wiki/conclusion#English) — from Latin *conclūsiō*, from the past participle stem of *conclūdō* "to conclude", from *con-* + *claudō*.

## exclusive

- Record: `{prefix:"ex-", stem:"clud", suffix:"-ive", literal:"shut out", definition:"limited to certain people only"}`
- Review: Confirmed `ex-` + `clud` + `-ive`. Literal changed from "close out of" to "shut out".
- Reference: Wiktionary, [exclusive](https://en.wiktionary.org/wiki/exclusive#English) — from Latin *exclūsīvus*, from *excludere* "to shut out, exclude", from *ex-* "out" + variant form of *claudere* "to close, shut".

## include

- Record: `{prefix:"in-", stem:"clud", suffix:null, literal:"shut in", definition:"to make something part of a group"}`
- Review: Confirmed `in-` + `clud`. Literal changed from "close into" to "shut in".
- Reference: Wiktionary, [include](https://en.wiktionary.org/wiki/include#English) — from Latin *inclūdō* "to shut in, enclose, insert", from *in-* "in" + *claudere* "to shut".

## confuse

- Record: `{prefix:"con-", stem:"fus", suffix:null, literal:"pour together", definition:"to make someone unsure or unable to understand"}`
- Review: Confirmed `con-` + `fus` (Latin *cōnfundō*). Literal changed from "pour with" to "pour together".
- Reference: Wiktionary, [confuse](https://en.wiktionary.org/wiki/confuse#English) — back-formation from *confused*, from Latin *cōnfūsus*, past participle of *cōnfundō*.
- Reference: Wiktionary (Latin), [confundo](https://en.wiktionary.org/wiki/confundo#Latin) — *cōnfundō* = *con-* "with, together" + *fundō* "pour".

## confusion

- Record: `{prefix:"con-", stem:"fus", suffix:"-ion", literal:"pour together", definition:"the state of being unsure or not understanding"}`
- Review: Confirmed `con-` + `fus` + `-ion`. Literal changed to "pour together".
- Reference: Wiktionary, [confusion](https://en.wiktionary.org/wiki/confusion#English) — from Latin *confusio*; *confuse* + *-ion*.
- Reference: Wiktionary (Latin), [confundo](https://en.wiktionary.org/wiki/confundo#Latin) — *cōnfundō* = *con-* "with, together" + *fundō* "pour".

## fusion

- Record: `{prefix:null, stem:"fus", suffix:"-ion", literal:"pour", definition:"the joining of two or more things into one"}`
- Review: Confirmed `fus` + `-ion`.
- Reference: Wiktionary, [fusion](https://en.wiktionary.org/wiki/fusion#English) — from Latin *fūsiōnem*, from *fusus*, past participle of *fundō* "to pour; to melt".

## conversation

- Record: `{prefix:"con-", stem:"vert", suffix:"-ion", literal:"keep company with", definition:"a talk between two or more people"}`
- Review: Confirmed `con-` + `vert` + `-ion` with a caveat: the Latin source is *conversor* "abide, keep company with" (*con-* + *versor*, a form related to *vertō*). Literal changed from "turn with" to "keep company with".
- Reference: Wiktionary, [conversation](https://en.wiktionary.org/wiki/conversation#English) — from Latin *conversātiō* "conversation", from *conversor* "abide, keep company with".
- Reference: Wiktionary (Latin), [conversor](https://en.wiktionary.org/wiki/conversor#Latin) — *conversor* = *con-* + *versor* "to dwell, be busy".

## convert

- Record: `{prefix:"con-", stem:"vert", suffix:null, literal:"turn around", definition:"to change something into a different form or use"}`
- Review: Confirmed `con-` + `vert`. Literal changed from "turn with" to "turn around", the source's gloss of *convertō*.
- Reference: Wiktionary, [convert](https://en.wiktionary.org/wiki/convert#English) — from Old French *convertir*, from Latin *converto* "turn around".
- Reference: Wiktionary (Latin), [converto](https://en.wiktionary.org/wiki/converto#Latin) — *convertō* = *con-* + *vertō*.

## reverse

- Record: `{prefix:"re-", stem:"vert", suffix:null, literal:"turn back", definition:"to go or turn backward; also, the opposite"}`
- Review: Confirmed `re-` + `vert` via Latin *reversus* (*re-* + *versō*, a form related to *vertō*).
- Reference: Wiktionary, [reverse](https://en.wiktionary.org/wiki/reverse#English) — from Latin *reversus*, perfect passive participle of *reversō*, from *re-* + *versō*.
- Reference: Wiktionary (Latin), [reverso](https://en.wiktionary.org/wiki/reverso#Latin) — *reversō*: from *re-* + *versō*; "to turn back, turn around".

## correct

- Record: `{prefix:"con-", stem:"rect", suffix:null, literal:"make straight", definition:"right, with no mistakes"}`
- Review: Confirmed `con-` + `rect` via Latin *corrigere* (*con-* + *regō*). Literal changed from "straight with" to "make straight"; replaced "censure severely".
- Reference: Wiktionary, [correct](https://en.wiktionary.org/wiki/correct#English) — from Latin *correctus* "improved, amended, correct", past participle of *corrigere* "to make straight, make right, make better, improve, correct", from *con-* "together" + combining form of *rego*.
- Reference: Wiktionary (Latin), [corrigo](https://en.wiktionary.org/wiki/corrigo#Latin) — *corrigō* = *con-* + *regō*: "to correct (set right)".

## correction

- Record: `{prefix:"con-", stem:"rect", suffix:"-ion", literal:"make straight", definition:"a change that fixes a mistake"}`
- Review: Confirmed `con-` + `rect` + `-ion`. Literal changed to "make straight".
- Reference: Wiktionary, [correction](https://en.wiktionary.org/wiki/correction#English) — from Old French *correccion*, from Latin *corrēctiō*.
- Reference: Wiktionary (Latin), [corrigo](https://en.wiktionary.org/wiki/corrigo#Latin) — *corrigō* = *con-* + *regō*: "to correct (set right)".

## regent

- Record: `{prefix:null, stem:"rect", suffix:"-ent", literal:"rule", definition:"a person who rules in place of a king or queen who cannot"}`
- Review: Confirmed `rect` + `-ent` via Latin *regēns*, from *regō* "to govern". Literal changed from "straight" to "rule".
- Reference: Wiktionary, [regent](https://en.wiktionary.org/wiki/regent#English) — from Latin *regēns* "ruling; ruler, governor, prince", present participle of *regō* "to govern, to steer".
- Reference: Wiktionary (Latin), [regens](https://en.wiktionary.org/wiki/regens#Latin) — present active participle of *regō* "rule".

## region

- Record: `{prefix:null, stem:"rect", suffix:"-ion", literal:"direction", definition:"an area of land or of the world"}`
- Review: Confirmed `rect` + `-ion` via Latin *regiō* (*regō* + *-iō*). Literal changed from "straight" to "direction", the Latin entry's first sense of *regiō*.
- Reference: Wiktionary, [region](https://en.wiktionary.org/wiki/region#English) — from Latin *regiō*, from *regō*.
- Reference: Wiktionary (Latin), [regio](https://en.wiktionary.org/wiki/regio#Latin) — *regiō* = *regō* + *-iō*: "direction, line".

## decision

- Record: `{prefix:"de-", stem:"cis", suffix:"-ion", literal:"cut off", definition:"a choice that you make after thinking"}`
- Review: Confirmed `de-` + `cis` + `-ion` (Latin *dēcīdō*, *dē* + *caedō* "cut"). Literal changed from "cut down" to "cut off", the source's gloss of *dēcīdō*.
- Reference: Wiktionary, [decision](https://en.wiktionary.org/wiki/decision#English) — from Latin *dēcīsiō*, from *dēcīdō* "to decide".
- Reference: Wiktionary, [decide](https://en.wiktionary.org/wiki/decide#English) — from Latin *dēcīdere*, infinitive of *dēcīdō* "cut off, decide", from *dē* "down from" + *caedō* "cut".

## decisive

- Record: `{prefix:"de-", stem:"cis", suffix:"-ive", literal:"cut off", definition:"able to make choices quickly and firmly; also, settling something clearly"}`
- Review: Confirmed as *decide* + *-ive* (via French *décisif*). Literal changed to "cut off".
- Reference: Wiktionary, [decisive](https://en.wiktionary.org/wiki/decisive#English) — from Middle French *décisif*, equivalent to *decide* + *-ive*.
- Reference: Wiktionary, [decide](https://en.wiktionary.org/wiki/decide#English) — from Latin *dēcīdō* "cut off, decide", from *dē* "down from" + *caedō* "cut".

## precise

- Record: `{prefix:"pre-", stem:"cis", suffix:null, literal:"cut before", definition:"exact and accurate"}`
- Review: Confirmed `pre-` + `cis` (Latin *praecīdō*, *prae-* + *caedō*).
- Reference: Wiktionary, [precise](https://en.wiktionary.org/wiki/precise#English) — from Middle French *précis*, from Latin *praecīsus*, perfect passive participle of *praecīdere*, from *prae-* "before, in front" + *caedere* "cut; strike".

## precision

- Record: `{prefix:"pre-", stem:"cis", suffix:"-ion", literal:"cut before", definition:"the quality of being exact and accurate"}`
- Review: Confirmed as *precise* + *-ion*.
- Reference: Wiktionary, [precision](https://en.wiktionary.org/wiki/precision#English) — from Middle French *precision*; *precise* + *-ion*.
- Reference: Wiktionary (Latin), [praecido](https://en.wiktionary.org/wiki/praecido#Latin) — *praecīdō* = *prae-* + *caedō* "cut; strike".

## define

- Record: `{prefix:"de-", stem:"fin", suffix:null, literal:"set a limit", definition:"to explain exactly what a word or idea means"}`
- Review: Confirmed `de-` + `fin` (Latin *dēfīniō*). Literal changed from "end down" to "set a limit", the source's gloss of *fīniō*. Here *dē-* is intensive ("completely"), so the shared `de-` gloss was widened to "down, away, completely" (Wiktionary [de-](https://en.wiktionary.org/wiki/de-#English): "intensifying").
- Reference: Wiktionary, [define](https://en.wiktionary.org/wiki/define#English) — from Latin *dēfīniō* "limit, settle, define", from *dē* + *fīniō* "set a limit, bound, end".

## definition

- Record: `{prefix:"de-", stem:"fin", suffix:"-ion", literal:"set a limit", definition:"an explanation of what a word or idea means"}`
- Review: Confirmed `de-` + `fin` + `-ion` (*define* + *-ition*). Literal changed to "set a limit"; replaced "clarity of outline". See *define*: `de-` is intensive here.
- Reference: Wiktionary, [definition](https://en.wiktionary.org/wiki/definition#English) — from Latin *dēfīnītiō*, from *dēfīniō*; *define* + *-ition*.
- Reference: Wiktionary (Latin), [definio](https://en.wiktionary.org/wiki/definio#Latin) — *dēfīniō* = *dē-* + *fīniō* "set a limit, bound, end".

## final

- Record: `{prefix:null, stem:"fin", suffix:"-al", literal:"end", definition:"coming at the end; last"}`
- Review: Confirmed `fin` + `-al`.
- Reference: Wiktionary, [final](https://en.wiktionary.org/wiki/final#English) — from Latin *fīnālis* "of or relating to the end or to boundaries", from *fīnis* "end".

## finance

- Record: `{prefix:null, stem:"fin", suffix:"-ance", literal:"end", definition:"the management of money"}`
- Review: Confirmed `fin` + `-ance` with a caveat: it comes through Middle French *finer* "to pay ransom", from *fin* "end", from Latin *fīnis*.
- Reference: Wiktionary, [finance](https://en.wiktionary.org/wiki/finance#English) — from Middle French *finance*, from *finer* "to pay ransom", from *fin* "end", from Latin *fīnis*.

## describe

- Record: `{prefix:"de-", stem:"scrib", suffix:null, literal:"write down", definition:"to say or write what someone or something is like"}`
- Review: Confirmed `de-` + `scrib`.
- Reference: Wiktionary, [describe](https://en.wiktionary.org/wiki/describe#English) — from Latin *dēscrībō* "to copy off, transcribe, sketch off, describe in painting or writing", from *dē* "off" + *scrībō* "write".

## description

- Record: `{prefix:"de-", stem:"scrib", suffix:"-ion", literal:"write down", definition:"words that tell what someone or something is like"}`
- Review: Confirmed `de-` + `scrib` + `-ion`; replaced "sort or variety".
- Reference: Wiktionary, [description](https://en.wiktionary.org/wiki/description#English) — from Latin *dēscrīptiō*, noun of action of *dēscrībō* "to describe"; *describe* + *-tion*.
- Reference: Wiktionary (Latin), [describo](https://en.wiktionary.org/wiki/describo#Latin) — *dēscrībō* = *dē-* + *scrībō* "write".

## prescription

- Record: `{prefix:"pre-", stem:"scrib", suffix:"-ion", literal:"write before", definition:"a doctor's written instructions for medicine"}`
- Review: Confirmed `pre-` + `scrib` + `-ion`.
- Reference: Wiktionary, [prescription](https://en.wiktionary.org/wiki/prescription#English) — from Latin *praescriptio* "preface; pretext; something written ahead of time", from *prae-* "before" + *scribere* "to write" + *-tio*.

## transcript

- Record: `{prefix:"trans-", stem:"scrib", suffix:null, literal:"write across", definition:"a written copy of what was said"}`
- Review: Confirmed `trans-` + `scrib`.
- Reference: Wiktionary, [transcript](https://en.wiktionary.org/wiki/transcript#English) — from Latin *transcriptum*, from *transcribere*.
- Reference: Wiktionary (Latin), [transcribo](https://en.wiktionary.org/wiki/transcribo#Latin) — *trānscrībō* = *trāns-* + *scrībō*.

## disorder

- Record: `{prefix:"dis-", stem:"ordin", suffix:null, literal:"lack of order", definition:"a lack of order; a mess"}`
- Review: Corrected the decomposition: the record had a `-er` suffix, but *disorder* is *dis-* + *order*, and the *-er* of *order* is not a suffix (it is French *ordre*, from Latin *ōrdinem*). Suffix removed. Literal changed from "order apart" to "lack of order"; *dis-* here is negative, so the shared `dis-` gloss was widened to "apart, away, not" (Wiktionary [dis-](https://en.wiktionary.org/wiki/dis-#English): "not, the reverse of").
- Reference: Wiktionary, [disorder](https://en.wiktionary.org/wiki/disorder#English) — from Old French *desordre*, from *des-* + *ordre*; surface analysis *dis-* + *order* (<< Latin *ōrdō*).

## extraordinary

- Record: `{prefix:"extra-", stem:"ordin", suffix:"-ary", literal:"outside the order", definition:"very unusual or remarkable"}`
- Review: Confirmed `extra-` + `ordin` + `-ary`. Literal changed from "order outside" to "outside the order", the Latin phrase behind the word.
- Reference: Wiktionary, [extraordinary](https://en.wiktionary.org/wiki/extraordinary#English) — from Latin *extrāōrdinārius*; surface analysis *extra-* + *ordinary*.
- Reference: Wiktionary (Latin), [extraordinarius](https://en.wiktionary.org/wiki/extraordinarius#Latin) — from the phrase *extrā ōrdinem* "outside the order".

## order

- Record: `{prefix:null, stem:"ordin", suffix:null, literal:"order", definition:"the way things are arranged; also, a command to do something"}`
- Review: Corrected the decomposition: removed the `-er` suffix, which is not a suffix here; *order* comes from Old French *ordre*, from Latin *ōrdinem*, accusative of *ōrdō*. Replaced "a degree in a continuum".
- Reference: Wiktionary, [order](https://en.wiktionary.org/wiki/order#English) — from Old French *ordre*, *ordene* "order, rank", from Latin *ōrdinem*, accusative of *ōrdō* "row, rank, regular arrangement".

## ordinary

- Record: `{prefix:null, stem:"ordin", suffix:"-ary", literal:"order", definition:"normal and usual; not special"}`
- Review: Confirmed `ordin` + `-ary`; replaced the probate-judge sense.
- Reference: Wiktionary, [ordinary](https://en.wiktionary.org/wiki/ordinary#English) — from Medieval Latin *ordinarius*, noun use of Latin *ōrdinārius* "regular, orderly", from *ōrdō* "order".

## evacuate

- Record: `{prefix:"ex-", stem:"vac", suffix:"-ate", literal:"empty out of", definition:"to move people out of a dangerous place"}`
- Review: Confirmed `ex-` + `vac` + `-ate`.
- Reference: Wiktionary, [evacuate](https://en.wiktionary.org/wiki/evacuate#English) — from Latin *ēvacuātus*, the perfect passive participle of *ēvacuō* "to empty out, evacuate".
- Reference: Wiktionary (Latin), [evacuo](https://en.wiktionary.org/wiki/evacuo#Latin) — *ēvacuō* = *ex-* + *vacuō* "make empty".

## evacuation

- Record: `{prefix:"ex-", stem:"vac", suffix:"-ion", literal:"empty out of", definition:"the act of moving people out of a dangerous place"}`
- Review: Confirmed `ex-` + `vac` + `-ion`.
- Reference: Wiktionary, [evacuation](https://en.wiktionary.org/wiki/evacuation#English) — from Late Latin *ēvacuātiō*; *evacuate* + *-ion*.

## vacant

- Record: `{prefix:null, stem:"vac", suffix:"-ant", literal:"empty", definition:"empty; not being used"}`
- Review: Confirmed `vac` + `-ant`.
- Reference: Wiktionary, [vacant](https://en.wiktionary.org/wiki/vacant#English) — from Old French *vacant*, from Latin *vacāns*.
- Reference: Wiktionary (Latin), [vacans](https://en.wiktionary.org/wiki/vacans#Latin) — present active participle of *vacō*.

## vacation

- Record: `{prefix:null, stem:"vac", suffix:"-ion", literal:"empty", definition:"a time away from work or school for rest or travel"}`
- Review: Confirmed `vac` + `-ion`; replaced the verb gloss.
- Reference: Wiktionary, [vacation](https://en.wiktionary.org/wiki/vacation#English) — from Old French *vacacion*, from Latin *vacātiō*; *vacate* + *-ion*.
- Reference: Wiktionary (Latin), [vacatio](https://en.wiktionary.org/wiki/vacatio#Latin) — *vacātiō* = *vacō* "to be free" + *-tiō*.

## advocate

- Record: `{prefix:"ad-", stem:"voc", suffix:"-ate", literal:"call to", definition:"to speak in support of something; also, a person who does this"}`
- Review: Confirmed `ad-` + `voc` + `-ate`.
- Reference: Wiktionary, [advocate](https://en.wiktionary.org/wiki/advocate#English) — from Latin *advocātus* "an advocate", from the substantivization of the perfect passive participle of *advocāre* "to call for".
- Reference: Wiktionary (Latin), [advoco](https://en.wiktionary.org/wiki/advoco#Latin) — *advocō* = *ad-* "to, towards, at" + *vocō* "to call, summon".

## provoke

- Record: `{prefix:"pro-", stem:"voc", suffix:null, literal:"call forward", definition:"to cause a reaction, especially by annoying someone"}`
- Review: Confirmed `pro-` + `voc`.
- Reference: Wiktionary, [provoke](https://en.wiktionary.org/wiki/provoke#English) — from Middle French *provoquer*, from Latin *prōvocāre*.
- Reference: Wiktionary (Latin), [provoco](https://en.wiktionary.org/wiki/provoco#Latin) — *prōvocō* = *prō-* "in front of, for" + *vocō* "call".

## vocal

- Record: `{prefix:null, stem:"voc", suffix:"-al", literal:"voice", definition:"relating to the voice; also, expressing opinions openly"}`
- Review: Confirmed `voc` + `-al` via Latin *vōcālis* (*vōx* + *-ālis*). Literal changed from "call" to "voice"; replaced the song-only noun gloss.
- Reference: Wiktionary, [vocal](https://en.wiktionary.org/wiki/vocal#English) — from Latin *vōcālis* "uttering a voice, sounding, speaking", from *vōx* "a voice, sound, tone" + *-ālis*.

## approval

- Record: `{prefix:"ad-", stem:"prob", suffix:"-al", literal:"test to", definition:"the feeling that something is good, or official permission"}`
- Review: Confirmed as *approve* + *-al*; *approve* comes from Latin *approbō* (*ad-* + *probō*). The `-al` here forms a noun of action, so the shared `-al` gloss was widened to "relating to; act of" (Wiktionary [-al](https://en.wiktionary.org/wiki/-al#English): "forming nouns, especially of verbal action").
- Reference: Wiktionary, [approval](https://en.wiktionary.org/wiki/approval#English) — *approve* + *-al*.
- Reference: Wiktionary, [approve](https://en.wiktionary.org/wiki/approve#English) — from Old French *aprover*, from Latin *approbō*, from *ad* + ….
- Reference: Wiktionary (Latin), [approbo](https://en.wiktionary.org/wiki/approbo#Latin) — *approbō* = *ad-* "to, towards, at" + *probō* "test, examine; approve".

## probable

- Record: `{prefix:null, stem:"prob", suffix:"-able", literal:"test", definition:"likely to happen or be true"}`
- Review: Confirmed `prob` + `-able`.
- Reference: Wiktionary, [probable](https://en.wiktionary.org/wiki/probable#English) — from Latin *probābilis* "that may be proved, credible", from *probāre* "to test, examine".

## probation

- Record: `{prefix:null, stem:"prob", suffix:"-ion", literal:"test", definition:"a period of testing someone's behavior or ability"}`
- Review: Confirmed `prob` + `-ion`.
- Reference: Wiktionary, [probation](https://en.wiktionary.org/wiki/probation#English) — from Latin *probatio* "a trying, inspection, examination", from *probare*, past participle *probatus* "to test, examine".

## audible

- Record: `{prefix:null, stem:"aud", suffix:"-ible", literal:"hear", definition:"loud enough to be heard"}`
- Review: Confirmed `aud` + `-ible`.
- Reference: Wiktionary, [audible](https://en.wiktionary.org/wiki/audible#English) — from Late Latin *audibilis*, from Latin *audire* "to hear".

## audition

- Record: `{prefix:null, stem:"aud", suffix:"-ion", literal:"hear", definition:"a short performance to show if someone is good enough for a role"}`
- Review: Confirmed `aud` + `-ion`; chose the common sense.
- Reference: Wiktionary, [audition](https://en.wiktionary.org/wiki/audition#English) — from Latin *audītiō*, from *audiō* "to hear".
- Reference: Wiktionary (Latin), [auditio](https://en.wiktionary.org/wiki/auditio#Latin) — *audītiō* = *audiō* "to hear" + *-tiō*.

## inaudible

- Record: `{prefix:"in-", stem:"aud", suffix:"-ible", literal:"not hear", definition:"too quiet to be heard"}`
- Review: Confirmed `in-` (not) + *audible*.
- Reference: Wiktionary, [inaudible](https://en.wiktionary.org/wiki/inaudible#English) — *in-* + *audible*.

## comfort

- Record: `{prefix:"con-", stem:"fort", suffix:null, literal:"strong with", definition:"a relaxed feeling with no pain or worry; also, kindness to someone who is upset"}`
- Review: Confirmed `con-` + `fort` via Late Latin *cōnfortō* (*con-* + *fortis* "strong").
- Reference: Wiktionary, [comfort](https://en.wiktionary.org/wiki/comfort#English) — from Old French *confort*, from the stem of Late Latin *confortō*.
- Reference: Wiktionary (Latin), [conforto](https://en.wiktionary.org/wiki/conforto#Latin) — *cōnfortō* = *con-* + *fortis* + *-ō*.

## comfortable

- Record: `{prefix:"con-", stem:"fort", suffix:"-able", literal:"strong with", definition:"making you feel relaxed and free from pain"}`
- Review: Confirmed as *comfort* + *-able*; replaced "more than adequate". Here *-able* is active ("providing comfort"), so the shared `-able` gloss was widened to "able to be; giving" (Wiktionary [-able](https://en.wiktionary.org/wiki/-able#English): "giving, or inclined to").
- Reference: Wiktionary, [comfortable](https://en.wiktionary.org/wiki/comfortable#English) — from Old French *confortable*, from *conforter*; *comfort* + *-able*.

## effort

- Record: `{prefix:"ex-", stem:"fort", suffix:null, literal:"strong out of", definition:"hard work or energy used to do something"}`
- Review: Confirmed `ex-` + `fort` via Vulgar Latin *\*exfortiō*.
- Reference: Wiktionary, [effort](https://en.wiktionary.org/wiki/effort#English) — from Old French *esfort*, deverbal of *esforcier* "to force, exert", from Vulgar Latin *\*exfortiō*, from Latin *ex* + *fortis* "strong".

## conscience

- Record: `{prefix:"con-", stem:"sci", suffix:"-ence", literal:"know with", definition:"the inner sense of what is right and wrong"}`
- Review: Confirmed `con-` + `sci` + `-ence`.
- Reference: Wiktionary, [conscience](https://en.wiktionary.org/wiki/conscience#English) — from Latin *conscientia* "knowledge within oneself", from *consciens*, present participle of *conscire* "to know, to be conscious".

## conscious

- Record: `{prefix:"con-", stem:"sci", suffix:"-ous", literal:"know with", definition:"awake and aware of what is happening"}`
- Review: Confirmed `con-` + `sci` + `-ous`. English *-ous* here adapts the Latin adjective ending *-us* (Wiktionary [-ous](https://en.wiktionary.org/wiki/-ous#English): "a means of adapting adjectives borrowed from Latin that originally ended simply in *-us*"), so the shared `-ous` gloss was widened to "full of; having" ("possession of").
- Reference: Wiktionary, [conscious](https://en.wiktionary.org/wiki/conscious#English) — from Latin *cōnscius* "conscious, conscious of guilt", itself from *con-* ….
- Reference: Wiktionary (Latin), [conscius](https://en.wiktionary.org/wiki/conscius#Latin) — *cōnscius* = *cōnsciō* + *-us*, or *con-* + *scius*.

## science

- Record: `{prefix:null, stem:"sci", suffix:"-ence", literal:"know", definition:"the study of the natural world through observation and experiments"}`
- Review: Confirmed `sci` + `-ence`.
- Reference: Wiktionary, [science](https://en.wiktionary.org/wiki/science#English) — from Latin *scientia* "knowledge", from *sciēns*.
- Reference: Wiktionary (Latin), [scientia](https://en.wiktionary.org/wiki/scientia#Latin) — *scientia* = *sciēns* "knowing, aware" + *-ia*.

## contribution

- Record: `{prefix:"con-", stem:"trib", suffix:"-ion", literal:"give with", definition:"something you give or do to help"}`
- Review: Confirmed `con-` + `trib` + `-ion`.
- Reference: Wiktionary, [contribution](https://en.wiktionary.org/wiki/contribution#English) — from Latin *contribūtiō*, from *contribuēre*; *contribute* + *-ion*.
- Reference: Wiktionary (Latin), [contribuo](https://en.wiktionary.org/wiki/contribuo#Latin) — *contribuō* = *con-* + *tribuō*.

## distribution

- Record: `{prefix:"dis-", stem:"trib", suffix:"-ion", literal:"give apart", definition:"the act of giving or sharing things out"}`
- Review: Confirmed `dis-` + `trib` + `-ion`.
- Reference: Wiktionary, [distribution](https://en.wiktionary.org/wiki/distribution#English) — from Latin *distributio*, from *distribuere* "to distribute", from *dis-* "apart" + *tribuere* "to assign, allot".

## corporal

- Record: `{prefix:null, stem:"corp", suffix:"-al", literal:"body", definition:"relating to the body"}`
- Review: Confirmed `corp` + `-al` for the adjective (Latin *corporālis*). The military rank *corporal* is a separate word with a different origin and is not taught here.
- Reference: Wiktionary, [corporal](https://en.wiktionary.org/wiki/corporal#English) — from Latin *corporālis*, from *corpus* "body".
- Reference: Wiktionary (Latin), [corporalis](https://en.wiktionary.org/wiki/corporalis#Latin) — *corporālis* = *corpus* + *-ālis*.

## corporate

- Record: `{prefix:null, stem:"corp", suffix:"-ate", literal:"body", definition:"relating to a large company"}`
- Review: Confirmed `corp` + `-ate`.
- Reference: Wiktionary, [corporate](https://en.wiktionary.org/wiki/corporate#English) — from Middle English *corporat* "corporeal, physical, embodied; incorporated".
- Reference: Wiktionary, [corporation](https://en.wiktionary.org/wiki/corporation#English) — from Latin *corporatus*, past participle of *corporō* "to form into a body".

## corporation

- Record: `{prefix:null, stem:"corp", suffix:"-ion", literal:"body", definition:"a large company or business"}`
- Review: Confirmed `corp` + `-ion`; replaced the slang "paunch" sense.
- Reference: Wiktionary, [corporation](https://en.wiktionary.org/wiki/corporation#English) — from Late Latin *corporatio* "assumption of a body", from *corporatus*, past participle of *corporō* "to form into a body".

## corrupt

- Record: `{prefix:"con-", stem:"rupt", suffix:null, literal:"break together", definition:"dishonest, especially by taking bribes"}`
- Review: Confirmed `con-` + `rupt`. Literal changed from "break with" to "break together", matching the source's gloss of *com-*.
- Reference: Wiktionary, [corrupt](https://en.wiktionary.org/wiki/corrupt#English) — from Latin *corruptus*, past participle of *corrumpō* "to destroy, ruin, injure, spoil, corrupt, bribe", from *com-* "together" + *rumpō* "to break in pieces".

## corruption

- Record: `{prefix:"con-", stem:"rupt", suffix:"-ion", literal:"break together", definition:"dishonest or illegal behavior, especially by people in power"}`
- Review: Confirmed `con-` + `rupt` + `-ion`. Literal changed to "break together".
- Reference: Wiktionary, [corruption](https://en.wiktionary.org/wiki/corruption#English) — from French *corruption*, from Latin *corruptiō*; *corrupt* + *-ion*.
- Reference: Wiktionary (Latin), [corrumpo](https://en.wiktionary.org/wiki/corrumpo#Latin) — *corrumpō* = *con-* + *rumpō* "break".

## interrupt

- Record: `{prefix:"inter-", stem:"rupt", suffix:null, literal:"break between", definition:"to stop someone while they are speaking or doing something"}`
- Review: Confirmed `inter-` + `rupt`.
- Reference: Wiktionary, [interrupt](https://en.wiktionary.org/wiki/interrupt#English) — from Latin *interruptus*, past participle of *interrumpere* "to break apart/off, interrupt", from *inter* "between" + ….
- Reference: Wiktionary (Latin), [interrumpo](https://en.wiktionary.org/wiki/interrumpo#Latin) — *interrumpō* = *inter-* + *rumpō*.

## donate

- Record: `{prefix:null, stem:"don", suffix:"-ate", literal:"give", definition:"to give something, especially to a charity"}`
- Review: Confirmed `don` + `-ate` (back-formation from *donation*).
- Reference: Wiktionary, [donate](https://en.wiktionary.org/wiki/donate#English) — back-formation from *donation* … ultimately from Latin *dōnāre* "to give".

## donation

- Record: `{prefix:null, stem:"don", suffix:"-ion", literal:"give", definition:"something given to help a person or cause"}`
- Review: Confirmed `don` + `-ion`.
- Reference: Wiktionary, [donation](https://en.wiktionary.org/wiki/donation#English) — from Latin *dōnātiō* "a present", from *dōnō* "to give", from *dōnum* "a gift".

## donor

- Record: `{prefix:null, stem:"don", suffix:"-or", literal:"give", definition:"a person who gives something, such as money or blood"}`
- Review: Confirmed `don` + `-or` via Old French *doneur*; the French entries show *donneur* = *donner* + *-eur* and *donner* < Old French *doner* < Latin *dōnāre*.
- Reference: Wiktionary, [donor](https://en.wiktionary.org/wiki/donor#English) — from Anglo-Norman *donour*, from Old French *doneur*.
- Reference: Wiktionary (French), [donner](https://en.wiktionary.org/wiki/donner#French) — from Middle French *donner*, from Old French *doner*, from Latin *dōnō*, *dōnāre*.

## flexible

- Record: `{prefix:null, stem:"flect", suffix:"-ible", literal:"bend", definition:"able to bend easily; also, able to change easily"}`
- Review: Confirmed `flect` + `-ible` (Latin *flexibilis*); replaced the circular "able to flex".
- Reference: Wiktionary, [flexible](https://en.wiktionary.org/wiki/flexible#English) — from Latin *flexibilis*, from *flectō* "to bend, curve".
- Reference: Wiktionary (Latin), [flexibilis](https://en.wiktionary.org/wiki/flexibilis#Latin) — *flexibilis* = *flectō* "to bend, curve" + *-bilis*.

## reflect

- Record: `{prefix:"re-", stem:"flect", suffix:null, literal:"bend back", definition:"to throw back light or sound; also, to think carefully"}`
- Review: Confirmed `re-` + `flect`.
- Reference: Wiktionary, [reflect](https://en.wiktionary.org/wiki/reflect#English) — from Old French *reflecter* "to bend back, turn back", from Latin *reflectō* "to reflect", from *re-* "again" + *flectō* "to bend, to curve".

## reflection

- Record: `{prefix:"re-", stem:"flect", suffix:"-ion", literal:"bend back", definition:"an image seen in a mirror or water; also, careful thought"}`
- Review: Confirmed `re-` + `flect` + `-ion`; replaced "expression without words".
- Reference: Wiktionary, [reflection](https://en.wiktionary.org/wiki/reflection#English) — from Late Latin *reflexiō*, from the participle stem of *reflectō*.
- Reference: Wiktionary (Latin), [reflecto](https://en.wiktionary.org/wiki/reflecto#Latin) — *reflectō* = *re-* + *flectō*.

## insect

- Record: `{prefix:"in-", stem:"sect", suffix:null, literal:"cut into", definition:"a small animal with six legs and a body in three parts"}`
- Review: Confirmed `in-` + `sect` (Latin *īnsecō* "to cut into").
- Reference: Wiktionary, [insect](https://en.wiktionary.org/wiki/insect#English) — from Latin *īnsectum*, from *īnsectus* "cut into, cut up, with a notched or divided body", from perfect passive participle of *īnsecō* "to cut into, to cut up", from *in-* + *secō* "to cut".

## section

- Record: `{prefix:null, stem:"sect", suffix:"-ion", literal:"cut", definition:"one of the parts that something is divided into"}`
- Review: Confirmed `sect` + `-ion`.
- Reference: Wiktionary, [section](https://en.wiktionary.org/wiki/section#English) — from Latin *sectiō* "cutting, cutting off", from *sectus*, past participle of *secāre* "to cut".

## sector

- Record: `{prefix:null, stem:"sect", suffix:"-or", literal:"cut", definition:"a part or area of something, such as a business area"}`
- Review: Confirmed `sect` + `-or` (Latin *sector* "cutter").
- Reference: Wiktionary, [sector](https://en.wiktionary.org/wiki/sector#English) — borrowed from Latin *sector* "cutter".
- Reference: Wiktionary (Latin), [sector](https://en.wiktionary.org/wiki/sector#Latin) — *sector* = *secō* "cut, cut off" + *-tor*.

## local

- Record: `{prefix:null, stem:"loc", suffix:"-al", literal:"place", definition:"belonging to or near a particular place"}`
- Review: Confirmed `loc` + `-al`; replaced the anesthetic sense.
- Reference: Wiktionary, [local](https://en.wiktionary.org/wiki/local#English) — from Late Latin *locālis* "belonging to a place"; ultimately from Latin *locus* "a place".

## locate

- Record: `{prefix:null, stem:"loc", suffix:"-ate", literal:"place", definition:"to find where something is"}`
- Review: Confirmed `loc` + `-ate`.
- Reference: Wiktionary, [locate](https://en.wiktionary.org/wiki/locate#English) — from Latin *locātus*, perfect passive participle of *locō* "to place", from *locus* "place".

## location

- Record: `{prefix:null, stem:"loc", suffix:"-ion", literal:"place", definition:"a place or position"}`
- Review: Confirmed `loc` + `-ion`.
- Reference: Wiktionary, [location](https://en.wiktionary.org/wiki/location#English) — from Latin *locatio* "a placing", from *locare* "to place, put, set", from *locus* "a place".

## nation

- Record: `{prefix:null, stem:"nat", suffix:"-ion", literal:"born", definition:"a country and the people who live in it"}`
- Review: Confirmed `nat` + `-ion`.
- Reference: Wiktionary, [nation](https://en.wiktionary.org/wiki/nation#English) — from Latin *nātiōnem*, accusative of *nātiō* "nation".
- Reference: Wiktionary (Latin), [natio](https://en.wiktionary.org/wiki/natio#Latin) — *nātiō*: root *\*ǵenh₁-*; sense "birth".

## native

- Record: `{prefix:null, stem:"nat", suffix:"-ive", literal:"born", definition:"belonging to a place by birth"}`
- Review: Confirmed `nat` + `-ive`. Latin *nātīvus* means "inborn", so the shared `-ive` gloss was widened to "tending to; relating to" (Wiktionary [-ive](https://en.wiktionary.org/wiki/-ive#English): "signifying relating or belonging to, of the nature of, tending to").
- Reference: Wiktionary, [native](https://en.wiktionary.org/wiki/native#English) — from Latin *nātīvus*, from *nātus* "birth".
- Reference: Wiktionary (Latin), [nativus](https://en.wiktionary.org/wiki/nativus#Latin) — *nātīvus* = *nātus* "born" + *-īvus*.

## nature

- Record: `{prefix:null, stem:"nat", suffix:"-ure", literal:"born", definition:"the natural world of plants, animals, and landscapes"}`
- Review: Confirmed `nat` + `-ure`.
- Reference: Wiktionary, [nature](https://en.wiktionary.org/wiki/nature#English) — from Latin *nātūra* "birth, origin, natural constitution or quality".

## resolution

- Record: `{prefix:"re-", stem:"solv", suffix:"-ion", literal:"loosen back", definition:"a firm decision to do something; also, the solving of a problem"}`
- Review: Confirmed `re-` + `solv` + `-ion`.
- Reference: Wiktionary, [resolution](https://en.wiktionary.org/wiki/resolution#English) — from Latin *resolūtiō* "a loosening, solution", from *resolvō* "to loosen".
- Reference: Wiktionary (Latin), [resolvo](https://en.wiktionary.org/wiki/resolvo#Latin) — *resolvō* = *re-* "back" + *solvō* "to loosen, unbind".

## resolve

- Record: `{prefix:"re-", stem:"solv", suffix:null, literal:"loosen back", definition:"to find an answer to a problem; also, to decide firmly"}`
- Review: Confirmed `re-` + `solv`.
- Reference: Wiktionary, [resolve](https://en.wiktionary.org/wiki/resolve#English) — from Latin *resolvō* "loosen, thaw, melt, resolve", equivalent to *re-* + *solve*.

## solution

- Record: `{prefix:null, stem:"solv", suffix:"-ion", literal:"loosen", definition:"an answer to a problem"}`
- Review: Confirmed `solv` + `-ion`.
- Reference: Wiktionary, [solution](https://en.wiktionary.org/wiki/solution#English) — from Latin *solūtiōnem*, accusative singular of *solūtiō*, from the verb *solvō*.
- Reference: Wiktionary (Latin), [solutio](https://en.wiktionary.org/wiki/solutio#Latin) — *solūtiō* = *solvō* "loosen; solve" + *-tiō*.

## appoint

- Record: `{prefix:"ad-", stem:"punct", suffix:null, literal:"point to", definition:"to choose someone for a job; also, to set a time for something"}`
- Review: Confirmed `ad-` + `punct` via Late Latin *appunctō* (*ad* + *punctum* "a point").
- Reference: Wiktionary, [appoint](https://en.wiktionary.org/wiki/appoint#English) — from Old French *apointier*, from Late Latin *appunctō* "to bring back to the point, restore …"; Latin *ad* + *punctum* "a point".

## appointment

- Record: `{prefix:"ad-", stem:"punct", suffix:"-ment", literal:"point to", definition:"an arranged meeting at a particular time"}`
- Review: Confirmed as *appoint* + *-ment*.
- Reference: Wiktionary, [appointment](https://en.wiktionary.org/wiki/appointment#English) — from Old French *appointement*; *appoint* + *-ment*.

## confidence

- Record: `{prefix:"con-", stem:"fid", suffix:"-ence", literal:"trust with", definition:"a feeling of being sure about yourself or something"}`
- Review: Confirmed `con-` + `fid` + `-ence`.
- Reference: Wiktionary, [confidence](https://en.wiktionary.org/wiki/confidence#English) — from Latin *cōnfīdentia*, from *cōnfīdō* "believe, confide in" from *con-* "with" + *fīdō* "trust".

## confident

- Record: `{prefix:"con-", stem:"fid", suffix:"-ent", literal:"trust with", definition:"feeling sure about yourself or about something"}`
- Review: Confirmed `con-` + `fid` + `-ent`.
- Reference: Wiktionary, [confident](https://en.wiktionary.org/wiki/confident#English) — from Latin *confidens* "confident, i.e. self-confident", present participle of *confidere* "to trust fully, confide".
- Reference: Wiktionary (Latin), [confido](https://en.wiktionary.org/wiki/confido#Latin) — *cōnfīdō* = *con-* "with, together" + *fīdō* "trust; rely upon".

## contact

- Record: `{prefix:"con-", stem:"tact", suffix:null, literal:"touch with", definition:"the act of touching or communicating with someone"}`
- Review: Confirmed `con-` + `tact`; replaced "close interaction".
- Reference: Wiktionary, [contact](https://en.wiktionary.org/wiki/contact#English) — from Latin *contactus*, from *contingō* "to touch on all sides", from *tangō* "to touch".
- Reference: Wiktionary (Latin), [contingo](https://en.wiktionary.org/wiki/contingo#Latin) — *contingō* = *con-* "together" + *tangō* "touch".

## intact

- Record: `{prefix:"in-", stem:"tact", suffix:null, literal:"not touched", definition:"whole and not damaged"}`
- Review: Confirmed `in-` (not) + `tact`. Literal changed from "touch into" to "not touched": Latin *intactus* means "untouched".
- Reference: Wiktionary, [intact](https://en.wiktionary.org/wiki/intact#English) — from Middle French *intact*, from Latin *intactus*.
- Reference: Wiktionary (Latin), [intactus](https://en.wiktionary.org/wiki/intactus#Latin) — *intactus* = *in-* "not" + *tāctus* (past participle of *tangō* "to touch"), literally "untouched".

## contemporary

- Record: `{prefix:"con-", stem:"tempor", suffix:"-ary", literal:"time with", definition:"belonging to the present time; also, living at the same time as someone"}`
- Review: Confirmed `con-` + `tempor` + `-ary`.
- Reference: Wiktionary, [contemporary](https://en.wiktionary.org/wiki/contemporary#English) — from Medieval Latin *contemporārius*, from *con-* "with, together" + *temporārius*, an adjective derived from *tempus* "time".

## temporary

- Record: `{prefix:null, stem:"tempor", suffix:"-ary", literal:"time", definition:"lasting only for a short time"}`
- Review: Confirmed `tempor` + `-ary`; definition simplified.
- Reference: Wiktionary, [temporary](https://en.wiktionary.org/wiki/temporary#English) — from Latin *temporarius*, from *tempus* "time".
- Reference: Wiktionary (Latin), [temporarius](https://en.wiktionary.org/wiki/temporarius#Latin) — *tempus* "time, period" + *-ārius* "-ary".

## determination

- Record: `{prefix:"de-", stem:"term", suffix:"-ion", literal:"set limits", definition:"the quality of not giving up when something is difficult"}`
- Review: Confirmed `de-` + `term` + `-ion` (*determine* + *-ation*). Literal changed from "end down" to "set limits", matching *determino* "to bound, limit".
- Reference: Wiktionary, [determination](https://en.wiktionary.org/wiki/determination#English) — from Latin *dēterminātiō*; *determine* + *-ation*.
- Reference: Wiktionary, [determine](https://en.wiktionary.org/wiki/determine#English) — from Latin *determino* "to bound, limit, prescribe, fix, determine", from *de* + *termino* "to limit", from *terminus*.

## terminal

- Record: `{prefix:null, stem:"term", suffix:"-al", literal:"end", definition:"a building where journeys by plane, bus, or train begin and end"}`
- Review: Confirmed `term` + `-al`; chose the common travel sense.
- Reference: Wiktionary, [terminal](https://en.wiktionary.org/wiki/terminal#English) — from Late Latin *terminalis* "pertaining to a boundary or to the end, terminal, final", from *terminus* "a bound, boundary, limit, end".

## disturb

- Record: `{prefix:"dis-", stem:"turb", suffix:null, literal:"stir completely", definition:"to interrupt or bother someone"}`
- Review: Confirmed `dis-` + `turb`. Here *dis-* is intensive (Latin *disturbare* is "intensifying for *turbare*"), so the literal changed from "stir apart" to "stir completely" and the shared `dis-` gloss was widened to "apart, away, not, completely" (Wiktionary [dis-](https://en.wiktionary.org/wiki/dis-#English): "used as an intensifier").
- Reference: Wiktionary, [disturb](https://en.wiktionary.org/wiki/disturb#English) — from Latin *disturbare*, intensifying for *turbare* "to throw into disorder".
- Reference: Wiktionary (Latin), [disturbo](https://en.wiktionary.org/wiki/disturbo#Latin) — *disturbō* = *dis-* + *turbō*.

## disturbance

- Record: `{prefix:"dis-", stem:"turb", suffix:"-ance", literal:"stir completely", definition:"something that interrupts or upsets a calm situation"}`
- Review: Confirmed as *disturb* + *-ance*; see *disturb*.
- Reference: Wiktionary, [disturbance](https://en.wiktionary.org/wiki/disturbance#English) — from Old French *destorbance*, from *destourber* "disturb", from Latin *disturbō*; *disturb* + *-ance*.

## elaborate

- Record: `{prefix:"ex-", stem:"labor", suffix:"-ate", literal:"work out of", definition:"full of detail; also, to add more detail"}`
- Review: Confirmed `ex-` + `labor` + `-ate` (Latin *ē-* "out, forth, fully").
- Reference: Wiktionary, [elaborate](https://en.wiktionary.org/wiki/elaborate#English) — from Late Latin *ēlabōrātus* "worked out", past participle of *ēlabōrō* "to work out", from *ē-* "out, forth, fully" + *labor* "work, toil, exertion".
- Reference: Wiktionary (Latin), [elaboro](https://en.wiktionary.org/wiki/elaboro#Latin) — *ēlabōrō* = *ex-* "out of" + *labōrō* "to work".

## laboratory

- Record: `{prefix:null, stem:"labor", suffix:"-ory", literal:"work", definition:"a room or building for doing science experiments"}`
- Review: Confirmed `labor` + `-ory` (Medieval Latin *labōrātōrium*).
- Reference: Wiktionary, [laboratory](https://en.wiktionary.org/wiki/laboratory#English) — from Medieval Latin *labōrātōrium*.
- Reference: Wiktionary (Latin), [laboratorium](https://en.wiktionary.org/wiki/laboratorium#Latin) — from the neuter of Medieval Latin *labōrātōrius*, from Late Latin *labōrātor*, from *labōrō*.

## emerge

- Record: `{prefix:"ex-", stem:"merg", suffix:null, literal:"plunge out of", definition:"to come out or appear"}`
- Review: Confirmed `ex-` + `merg` (Latin *ē-*, a variant of *ex-*).
- Reference: Wiktionary, [emerge](https://en.wiktionary.org/wiki/emerge#English) — from Latin *ēmergō* "to rise up or out", from *ē-* (a variant of *ex-* "out, forth") + *mergō* "to dip, to sink".

## equal

- Record: `{prefix:null, stem:"equ", suffix:"-al", literal:"equal", definition:"the same in amount, size, or value"}`
- Review: Confirmed `equ` + `-al` (Latin *aequālis* = *aequus* + *-ālis*); replaced the verb gloss.
- Reference: Wiktionary, [equal](https://en.wiktionary.org/wiki/equal#English) — from Latin *aequālis*.
- Reference: Wiktionary (Latin), [aequalis](https://en.wiktionary.org/wiki/aequalis#Latin) — *aequālis* = *aequus* "equal, even" + *-ālis*.

## equation

- Record: `{prefix:null, stem:"equ", suffix:"-ion", literal:"equal", definition:"a math statement that two amounts are equal"}`
- Review: Confirmed `equ` + `-ion` (Latin *aequātiō* "an equalizing").
- Reference: Wiktionary, [equation](https://en.wiktionary.org/wiki/equation#English) — from Latin *aequātiō* "an equalizing"; *equate* + *-ion*.

## evaluation

- Record: `{prefix:"ex-", stem:"val", suffix:"-ion", literal:"value out", definition:"a judgment about how good or useful something is"}`
- Review: Confirmed `ex-` + `val` + `-ion` with a caveat: it comes through French *évaluation* (*évaluer* + *-ation*), and French *é-* comes from Latin *ex-*. Literal changed from "strong out of" to "value out".
- Reference: Wiktionary, [evaluation](https://en.wiktionary.org/wiki/evaluation#English) — from French *évaluation*; *evaluate* + *-ion*.
- Reference: Wiktionary (French), [évaluer](https://en.wiktionary.org/wiki/%C3%A9valuer#French) — from *é-* + Old French *value* + *-er*; French *é-* from Old French *es-*, from Latin *ex-*.
- Reference: Wiktionary (Latin), [valeo](https://en.wiktionary.org/wiki/valeo#Latin) — *valeō* "be strong, be worth" (via *value*).

## valuable

- Record: `{prefix:null, stem:"val", suffix:"-able", literal:"worth", definition:"worth a lot of money, or very useful"}`
- Review: Confirmed as *value* + *-able*; *value* comes from Latin *valeō* "be strong, be worth". Literal changed from "strong" to "worth".
- Reference: Wiktionary, [valuable](https://en.wiktionary.org/wiki/valuable#English) — *value* + *-able*.
- Reference: Wiktionary, [value](https://en.wiktionary.org/wiki/value#English) — from Old French *value*, feminine past participle of *valoir*, from Latin *valeō*, *valēre* "be strong, be worth".

## expedition

- Record: `{prefix:"ex-", stem:"ped", suffix:"-ion", literal:"foot out of", definition:"a long journey made for a special purpose, such as exploring"}`
- Review: Confirmed `ex-` + `ped` + `-ion` (Latin *expediō* = *ex-* + *pēs* "foot").
- Reference: Wiktionary, [expedition](https://en.wiktionary.org/wiki/expedition#English) — from Middle French *expédition*, and its source, Latin *expeditio*.
- Reference: Wiktionary (Latin), [expedio](https://en.wiktionary.org/wiki/expedio#Latin) — *expediō* = *ex-* "out of" + *pēs* "feet" + *-iō*.

## pedal

- Record: `{prefix:null, stem:"ped", suffix:"-al", literal:"foot", definition:"a part you push with your foot to make something work"}`
- Review: Confirmed `ped` + `-al` (Latin *pedālis*); replaced the verb gloss.
- Reference: Wiktionary, [pedal](https://en.wiktionary.org/wiki/pedal#English) — from French *pédale*, from Italian *pedale*, from Latin *pedālis*.
- Reference: Wiktionary (Latin), [pedalis](https://en.wiktionary.org/wiki/pedalis#Latin) — *pedālis* = *pēs* + *-ālis*.

## extortion

- Record: `{prefix:"ex-", stem:"tort", suffix:"-ion", literal:"twist out of", definition:"getting money from someone by threats or force"}`
- Review: Confirmed `ex-` + `tort` + `-ion`.
- Reference: Wiktionary, [extortion](https://en.wiktionary.org/wiki/extortion#English) — from Late Latin *extortiō*, from *extorqueō*; *extort* + *-ion*.
- Reference: Wiktionary (Latin), [extorqueo](https://en.wiktionary.org/wiki/extorqueo#Latin) — *extorqueō* = *ex-* + *torqueō* "twist, wrench".

## torture

- Record: `{prefix:null, stem:"tort", suffix:"-ure", literal:"twist", definition:"causing great pain to someone on purpose"}`
- Review: Confirmed `tort` + `-ure` (Late Latin *tortūra* "a twisting").
- Reference: Wiktionary, [torture](https://en.wiktionary.org/wiki/torture#English) — from Late Latin *tortūra* "a twisting, writhing, of bodily pain".

## fracture

- Record: `{prefix:null, stem:"fract", suffix:"-ure", literal:"break", definition:"a crack or break, especially in a bone"}`
- Review: Confirmed `fract` + `-ure`.
- Reference: Wiktionary, [fracture](https://en.wiktionary.org/wiki/fracture#English) — from Latin *frāctūra* "a breach, fracture, cleft", from *frangere* "to break".

## fragile

- Record: `{prefix:null, stem:"fract", suffix:"-ile", literal:"break", definition:"easily broken or damaged"}`
- Review: Confirmed `fract` + `-ile` (Latin *fragilis* = *frangō* + *-ilis*).
- Reference: Wiktionary, [fragile](https://en.wiktionary.org/wiki/fragile#English) — from Latin *fragilis*, formed on *frag-*, the root of *frangere* "to break".
- Reference: Wiktionary (Latin), [fragilis](https://en.wiktionary.org/wiki/fragilis#Latin) — *fragilis* = *frangō* "break, shatter" + *-ilis* "-ile".

## fugitive

- Record: `{prefix:null, stem:"fug", suffix:"-ive", literal:"flee", definition:"a person who is running away, especially from the police"}`
- Review: Confirmed `fug` + `-ive` (Latin *fugitīvus*, from *fugitō*, frequentative of *fugiō* "flee"); replaced "lasting a brief time".
- Reference: Wiktionary, [fugitive](https://en.wiktionary.org/wiki/fugitive#English) — from Latin *fugitīvus*, from *fugitō*.
- Reference: Wiktionary (Latin), [fugito](https://en.wiktionary.org/wiki/fugito#Latin) — *fugitō*: frequentative of *fugiō*; *fugiō* + *-tō*.

## refuge

- Record: `{prefix:"re-", stem:"fug", suffix:null, literal:"flee back", definition:"a safe place to go when in danger"}`
- Review: Confirmed `re-` + `fug`.
- Reference: Wiktionary, [refuge](https://en.wiktionary.org/wiki/refuge#English) — from Latin *refugium*, from *re-* + *fugiō* "flee".

## immortal

- Record: `{prefix:"in-", stem:"mort", suffix:"-al", literal:"not mortal", definition:"living forever; never dying"}`
- Review: Confirmed `in-` (not, here *im-*) + `mort` + `-al`. Literal changed from "not death" to "not mortal".
- Reference: Wiktionary, [immortal](https://en.wiktionary.org/wiki/immortal#English) — from Latin *immortālis*, from prefix *im-* "not" (from *in-*) + *mortālis* "mortal" (from *mors* "death" + *-alis*).

## mortal

- Record: `{prefix:null, stem:"mort", suffix:"-al", literal:"death", definition:"certain to die someday; also, a human being"}`
- Review: Confirmed `mort` + `-al`.
- Reference: Wiktionary, [mortal](https://en.wiktionary.org/wiki/mortal#English) — from Old French *mortal*, and their source Latin *mortālis*.
- Reference: Wiktionary (Latin), [immortalis](https://en.wiktionary.org/wiki/immortalis#Latin) — *immortālis* = *in-* "not" + *mortālis*.

## impulse

- Record: `{prefix:"in-", stem:"pel", suffix:null, literal:"drive into", definition:"a sudden wish to do something"}`
- Review: Confirmed `in-` + `pel` (Latin *impulsus*, from *impellō* = *in-* + *pellō* "push, drive").
- Reference: Wiktionary, [impulse](https://en.wiktionary.org/wiki/impulse#English) — from Middle French *impulser*, from Latin *impulsus*.
- Reference: Wiktionary (Latin), [impello](https://en.wiktionary.org/wiki/impello#Latin) — *impellō* = *in-* + *pellō* "push, drive".

## impulsive

- Record: `{prefix:"in-", stem:"pel", suffix:"-ive", literal:"drive into", definition:"acting suddenly without thinking first"}`
- Review: Confirmed `in-` + `pel` + `-ive`. Literal changed from "not drive" to "drive into": *in-* here means "in", not "not".
- Reference: Wiktionary, [impulsive](https://en.wiktionary.org/wiki/impulsive#English) — from Middle French *impulsif*, from Latin *impulsivus*.
- Reference: Wiktionary (Latin), [impello](https://en.wiktionary.org/wiki/impello#Latin) — *impellō* = *in-* "in" + *pellō* "push, drive".

## innocence

- Record: `{prefix:"in-", stem:"noc", suffix:"-ence", literal:"not harm", definition:"the state of not being guilty of a crime or wrong"}`
- Review: Confirmed `in-` (not) + `noc` + `-ence`. Literal changed from "harm into" to "not harm".
- Reference: Wiktionary, [innocence](https://en.wiktionary.org/wiki/innocence#English) — from Old French *innocence*, from Latin *innocentia*.

## innocent

- Record: `{prefix:"in-", stem:"noc", suffix:"-ent", literal:"not harm", definition:"not guilty of a crime or wrong"}`
- Review: Confirmed `in-` (not) + `noc` + `-ent`. Literal changed from "harm into" to "not harm".
- Reference: Wiktionary, [innocent](https://en.wiktionary.org/wiki/innocent#English) — from Latin *innocēns* "harmless, inoffensive", from *in-* "not" + *nocēns*, present participle of *noceō* "to hurt".

## inspiration

- Record: `{prefix:"in-", stem:"spir", suffix:"-ion", literal:"breathe into", definition:"something that gives you new ideas or makes you want to create"}`
- Review: Confirmed `in-` + `spir` + `-ion` (*inspire* + *-ation*).
- Reference: Wiktionary, [inspiration](https://en.wiktionary.org/wiki/inspiration#English) — from Late Latin *īnspīrātiōnem*, from *īnspīrātus* (past participle of *inspīrō*); *inspire* + *-ation*.

## inspire

- Record: `{prefix:"in-", stem:"spir", suffix:null, literal:"breathe into", definition:"to fill someone with the wish to do something good or creative"}`
- Review: Confirmed `in-` + `spir`; replaced "heighten or intensify".
- Reference: Wiktionary, [inspire](https://en.wiktionary.org/wiki/inspire#English) — from Old French *inspirer*, from Latin *īnspīrō*, *īnspīrāre* "inspire", itself a loan-translation of Biblical Greek *πνέω* "breathe", from *in* + *spīrō* "breathe".

## Sampling decision

Every reviewed entry is checked word by word against its cited reference; nothing is promoted by automated heuristics. Each stem-family batch is then independently reviewed by Codex and spot-checked by the project owner (about 10% of the batch) before it is merged. The source bank's known material errors mean unaudited words stay `reviewed:false`.

## Quarantined

Words held back from teaching modes, with the reason.

- seduce — the decomposition is sound (*sē-* + *dūcō*, "lead astray"), but the main modern sense is sexual, which doesn't suit a kids' game ([Wiktionary](https://en.wiktionary.org/wiki/seduce))
- perform — folk etymology: not from Latin *forma*; from Old French *parfournir* "to complete, accomplish", from Frankish *\*frummjan*, so no honest `per-` + `form` reading exists ([Wiktionary](https://en.wiktionary.org/wiki/perform))
- performance — same as *perform*: *perform* + *-ance*, and *perform* is not from *forma* ([Wiktionary](https://en.wiktionary.org/wiki/performance))
- performer — same as *perform*: *perform* + *-er* ([Wiktionary](https://en.wiktionary.org/wiki/performer))
- mobile — Latin *mōbilis* is *moveō* + *-bilis*, which fits the `mot` family but not the recorded `-ile` suffix; definition corrected to "able to move or be moved easily" but held back until the suffix can be represented accurately ([Wiktionary](https://en.wiktionary.org/wiki/mobilis#Latin))
- static — Greek *statikós*, from *hístēmi* "to make stand"; cognate with Latin *stāre* but not derived from it, so the `stat` (Latin) decomposition is not supported; definition corrected to "not moving or changing" ([Wiktionary](https://en.wiktionary.org/wiki/static))
- advise — comes via Late Latin *advisō* = *ad* + *vīsō*; Wiktionary disagrees on whether *vīsō* derives from *videō* (English *visit* entry) or is a sister formation from the same root (Latin *viso* entry), so the `vid` mapping is unresolved; definition corrected ([Wiktionary](https://en.wiktionary.org/wiki/viso#Latin))
- advisor — *advise* + *-or*; inherits the unresolved `vid` mapping of *advise*; definition corrected ([Wiktionary](https://en.wiktionary.org/wiki/advisor))
- visitor — *visit* + *-or*, from Latin *vīsitō*, frequentative of *vīsō*; same unresolved *vīsō*/*videō* conflict as *advise*; definition corrected ([Wiktionary](https://en.wiktionary.org/wiki/visit))
- interference — not a *ferō* ("carry") word: from *interfere*, from Old French *entreferir*, *entre-* + *ferir* "to hit, to strike", from Latin *feriō*; no `strike` stem exists ([Wiktionary](https://en.wiktionary.org/wiki/interfere))
- factory — the English entry gives "probably *factor* + *-y*", so the recorded `-ory` suffix is not supported (Latin *factōrium* "oil press" is only a comparison); definition corrected to "a building where goods are made" ([Wiktionary](https://en.wiktionary.org/wiki/factory))
- tendency — from Medieval Latin *tendentia* (from *tendēns*, *tendō*), but the English ending is *-ency*, and the recorded `-ence` suffix is not supported by the source; definition corrected to "a habit of acting or happening in a particular way" ([Wiktionary](https://en.wiktionary.org/wiki/tendency))
- comply — not a *plicō* ("fold") word: from Latin *complēre* "to fill up, complete" (*con-* + *pleō*), via Italian/Catalan/Spanish; no `fill` stem exists ([Wiktionary](https://en.wiktionary.org/wiki/comply))
- supply — not a *plicō* ("fold") word: from Latin *suppleō* "to fill up, make full, complete, supply" (*sub-* + *pleō*); the Middle English spelling was later modified ([Wiktionary](https://en.wiktionary.org/wiki/supply))
- complex — from Latin *complector* (*com-* + *plectō* "to weave, braid"), a different verb from *plicō* "fold" though from the same root; held back for consistency with other sister-verb cases ([Wiktionary](https://en.wiktionary.org/wiki/complex))
- currency — from Medieval Latin *currentia* (*currēns* + *-ia*), *current* + *-cy*; as with *tendency*, the recorded `-ence` suffix does not represent the English *-ency* ending; definition corrected to "the money used in a country" ([Wiktionary](https://en.wiktionary.org/wiki/currency))
- intercourse — the decomposition is sound (*intercursus*, "running between"), but the main modern sense is sexual, which doesn't suit a kids' game ([Wiktionary](https://en.wiktionary.org/wiki/intercourse))
- victory — the English entry gives *victor* + *-y* and the Latin gives *victōria* = *victor* + *-ia*; neither supports the recorded `-ory` ("place for; relating to") suffix, matching the *factory* case; definition corrected to "the act of winning a battle or contest" ([Wiktionary](https://en.wiktionary.org/wiki/victory))
- refuse — origin disputed in the source: Vulgar Latin *\*refūsāre*, either a blend of *refūtāre* and *recūsāre* or from *refūsus*, past participle of *refundere* "to pour back"; the `fus` (pour) mapping is unresolved ([Wiktionary](https://en.wiktionary.org/wiki/refuse))
- pervert — the decomposition is sound (*pervertō*, *per-* + *vertō*), but the common modern noun sense doesn't suit a kids' game ([Wiktionary](https://en.wiktionary.org/wiki/pervert))
- tribal — from Latin *tribālis* (*tribus* "tribe" + *-ālis*); the `trib` tile is taught as "give, pay" (from *tribuō*), which misstates the meaning of *tribal*; definition corrected to "relating to a tribe" ([Wiktionary](https://en.wiktionary.org/wiki/tribal))
- emergency — from Medieval Latin *emergentia* (*emergens*, from *emergo*), *emergent* + *-cy*; as with *tendency* and *currency*, the recorded `-ence` suffix does not represent the English *-ency* ending; definition corrected to "a sudden, dangerous situation that needs quick action" ([Wiktionary](https://en.wiktionary.org/wiki/emergency))
