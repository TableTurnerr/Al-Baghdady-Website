# DFW Middle-Eastern Density — ACS B04006

> **Status (updated 2026-05-21): variable codes CONFIRMED; numbers PENDING a free API key.**
>
> The Census API is reachable this session (the groups/variables endpoint returns data with
> no key). The **data endpoint, however, requires an API key** — an un-keyed query returns
> Census's `missing_key.html`. We don't have a key in this environment.
>
> Per the strict rule on this doc — **do not fill ancestry numbers from any non-ACS source** —
> the ranking tables below stay empty until the query is run with a key. No fabricated numbers.
> What's new vs. the last attempt: the exact B04006 codes are now verified (below) and the data
> query is ready to run in one shot. **A free key takes ~2 minutes:**
> <https://api.census.gov/data/key_signup.html> — then run §"Ready query" and the numbers drop in.

## Confirmed variables (verified live against the 2023 ACS5 B04006 group, 2026-05-21)
| Ancestry | Code | Label (verbatim) |
|---|---|---|
| Arab (total, all sub-ancestries) | `B04006_006E` | Estimate!!Total:!!Arab: |
| Arab → Iraqi | `B04006_008E` | …Arab:!!Iraqi |
| Arab → Lebanese | `B04006_010E` | …Arab:!!Lebanese |
| Arab → Syrian | `B04006_013E` | …Arab:!!Syrian |
| Arab → Palestinian | `B04006_012E` | …Arab:!!Palestinian |
| Arab → Egyptian | `B04006_007E` | …Arab:!!Egyptian |
| Arab → Jordanian | `B04006_009E` | …Arab:!!Jordanian |
| Assyrian/Chaldean/Syriac | `B04006_017E` | Estimate!!Total:!!Assyrian/Chaldean/Syriac |
| Iranian | `B04006_048E` | Estimate!!Total:!!Iranian |
| Total population (denominator) | `B01003_001E` | — |

**Middle-Eastern pool (scope used for this Iraqi bakery):** `Arab total (006E) + Iranian (048E)
+ Assyrian/Chaldean/Syriac (017E)`. Using the Arab *total* rather than summing 5 sub-ancestries
keeps Egyptian/Jordanian/etc. in the pool and avoids double-counting. Chaldean is included
deliberately — it's a large Iraqi-Christian community and core to this audience.

## Ready query (run once a key exists)
```
https://api.census.gov/data/2023/acs/acs5?get=NAME,B01003_001E,B04006_006E,B04006_048E,B04006_017E,B04006_008E,B04006_010E,B04006_013E,B04006_012E&for=place:*&in=state:48&key=YOUR_KEY
```
Then: filter rows to DFW Places, compute `pool = 006E+048E+017E`, `per_1k = pool/B01003_001E*1000`,
drop Places under 5,000 pop from the per-capita ranking, flag rows where MOE ≥ 50% of estimate.
(A node parser for this is trivial — same shape as the snippet used to confirm the codes.)

## Ranking tables — PENDING (run the query above)
| Rank | Place | ME pool | Total pop | per 1,000 |
|---|---|---|---|---|
| — | _pending key_ | — | — | — |

---

## Qualitative signal — NON-ACS, directional only (safe to act on for city selection)
This is **not** the ACS ranking and contains **no invented counts** — it's sourced community
context, enough to choose which cities the matrix targets while the exact numbers wait on a key:

- **Richardson** — the DFW Arab-American hub (IANT, one of the metroplex's largest mosques;
  large Iraqi community). This is Al-Baghdady's home city, so it's the canonical location, not
  a `/near` target.
- **Iranians** cluster in the northern suburbs: **Plano – Frisco – Allen – McKinney**.
- **Arab / Muslim** communities are strongest in **Plano, Irving, Carrollton, Garland**, with
  notable presence in **Euless / Bedford** and affluent **Coppell**.

**Implication for the matrix:** the existing 10 `/near` cities (Plano, Garland, Addison, North
Dallas, Far North Dallas, Allen, McKinney, Irving, Carrollton, Frisco) already align well with
this signal — no re-pick needed. **Coppell** and **Euless** are the two best *additions* when we
expand the city axis. Exact ordering/priority is what the ACS numbers will settle.

Sources (qualitative): [Demographics of DFW](https://en.wikipedia.org/wiki/Demographics_of_Dallas%E2%80%93Fort_Worth) ·
[Islam in the DFW metroplex](https://en.wikipedia.org/wiki/Islam_in_the_Dallas%E2%80%93Fort_Worth_metroplex) ·
[Texas Tribune — Arab Texans / MENA census gap](https://www.texastribune.org/2020/10/19/2020-census-texas-arab-mena/)
(note: Census has no MENA category, so Arab counts are undercounted even in ACS — treat the
forthcoming numbers as a floor, not a ceiling).

## Hand-off
1. Grab a free key: <https://api.census.gov/data/key_signup.html>
2. Run §"Ready query", save the raw JSON next to this doc for audit.
3. Parse → fill the ranking table → delete the "PENDING" banner.
