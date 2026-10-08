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

## Sampling decision

Every reviewed entry is checked word by word against its cited reference; nothing is promoted by automated heuristics. Each stem-family batch is then independently reviewed by Codex and spot-checked by the project owner (about 10% of the batch) before it is merged. The source bank's known material errors mean unaudited words stay `reviewed:false`.

## Quarantined

Words held back from teaching modes, with the reason.

- seduce — the decomposition is sound (*sē-* + *dūcō*, "lead astray"), but the main modern sense is sexual, which doesn't suit a kids' game ([Wiktionary](https://en.wiktionary.org/wiki/seduce))
