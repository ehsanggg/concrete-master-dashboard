import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function SlabCalculatorContent() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Intro */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-black text-foreground tracking-tight mb-6">
            The Complete Concrete Slab Calculator Guide: Cubic Yards, Bag Count &amp; ACI Engineering Standards
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Use our <strong className="text-foreground">Concrete Slab Calculator</strong> above to get instant results for your project — then read this guide to understand the engineering logic that makes those numbers accurate. Whether you are pouring a backyard patio or a commercial driveway, the difference between a structurally sound slab and a cracked one often comes down to precise calculation, correct thickness selection, and rigorous sub-base preparation.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link to="/" className="text-accent font-bold hover:underline">→ Concrete Material Calculator</Link>
            <Link to="/tools" className="text-accent font-bold hover:underline">→ All Tools</Link>
          </div>
        </motion.div>

        {/* Math Behind the Slab */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The Math Behind the Slab — From Cubic Inches to Cubic Yards
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most online tutorials skip straight to the formula. This section shows you exactly why the formula works — and how a simple unit-conversion error can send you to the concrete plant with the wrong order.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">Understanding Volume in Three Dimensions</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A concrete slab occupies three-dimensional space: length, width, and thickness. Multiplying these three dimensions together gives you volume. The challenge is that thickness is almost always specified in inches, while ready-mix concrete is priced and delivered in cubic yards. Mixing units without converting is the single most common source of ordering errors.
          </p>

          <div className="surface-card p-5 mb-4">
            <h4 className="font-bold text-foreground mb-2">Formula</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Step 1</strong> — Convert thickness to feet: 4 inches ÷ 12 = 0.333 ft | 6 inches ÷ 12 = 0.500 ft</p>
              <p><strong className="text-foreground">Step 2</strong> — Calculate volume in cubic feet: Volume (cu ft) = Length (ft) × Width (ft) × Thickness (ft)</p>
              <p><strong className="text-foreground">Step 3</strong> — Convert cubic feet to cubic yards: Cubic Yards = Volume (cu ft) ÷ 27</p>
              <p className="text-xs mt-2">(There are 27 cubic feet in one cubic yard: 3 ft × 3 ft × 3 ft = 27 cu ft)</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3">Worked Example: 12 × 12 ft Slab at 4-Inch Depth</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Thickness: 4 ÷ 12 = 0.333 ft → Volume: 12 × 12 × 0.333 = 47.99 cu ft → Cubic Yards: 47.99 ÷ 27 = <strong className="text-foreground">1.78 cu yd</strong>
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Before adding a waste factor, you need 1.78 cubic yards of concrete for this slab. Use the <Link to="/tools/slab-calculator" className="text-accent font-bold hover:underline">Concrete Slab Calculator</Link> above to verify this instantly for any dimensions.
          </p>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-4">
            <p className="text-sm font-bold text-accent mb-1">★ Pro Tip</p>
            <p className="text-sm text-muted-foreground">
              Always confirm your dimensions with a tape measure twice before entering values into any Concrete Pour Estimator. An error of just 6 inches in length on a 20×20 slab translates to a 0.37 cu yd shortfall — roughly 19 bags of 80 lb concrete.
            </p>
          </div>
        </motion.div>

        {/* Waste Factor */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The 'Hidden' Waste Factor — Why ACI 302.1R Recommends 5–10% Extra
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every experienced contractor orders more concrete than their calculator says they need. This is not guesswork — it is a principle codified in ACI 302.1R, the American Concrete Institute's Guide for Concrete Floor and Slab Construction.
          </p>

          <div className="surface-card p-5 mb-4">
            <h4 className="font-bold text-foreground mb-2">ACI Standard Reference</h4>
            <p className="text-sm text-muted-foreground">
              ACI 302.1R-15, Section 4.1.1 states that variations in sub-grade elevation, formwork irregularities, and pump line waste necessitate a minimum 5% overage on most residential pours. For complex shapes, sloped sites, or pump-delivered concrete, 10% is the recommended standard.
            </p>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3">The Four Sources of Concrete Waste</h3>
          <ul className="text-muted-foreground leading-relaxed space-y-2 mb-4 list-disc list-inside">
            <li><strong className="text-foreground">Sub-grade elevation variations:</strong> Even a well-compacted gravel base has surface irregularities of ±0.5 inches across a 20-foot span. These low spots consume extra concrete directly.</li>
            <li><strong className="text-foreground">Formwork leakage:</strong> Gaps at form joints and corners allow liquid concrete to bleed through. Even tight forms lose 1–2% of volume on large pours.</li>
            <li><strong className="text-foreground">Pump and transit mixer residue:</strong> Ready-mix trucks retain 0.25–0.5 cu yd of concrete in the drum that cannot be discharged. Pump lines hold additional volume.</li>
            <li><strong className="text-foreground">Spillage and overpour:</strong> Hand-screeding and vibrating the concrete inevitably displaces some material beyond the form boundaries.</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">Applying the Waste Factor: The Adjusted Volume Formula</h3>
          <div className="surface-card p-5 mb-4">
            <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground">Adjusted Volume</strong> = Calculated Volume × (1 + Waste Factor)</p>
            <p className="text-sm text-muted-foreground">Example — 20×20 slab at 4 inches (raw volume: 2.47 cu yd):</p>
            <p className="text-sm text-muted-foreground">At 5% waste: 2.47 × 1.05 = <strong className="text-foreground">2.59 cu yd</strong></p>
            <p className="text-sm text-muted-foreground">At 10% waste: 2.47 × 1.10 = <strong className="text-foreground">2.72 cu yd</strong></p>
            <p className="text-xs text-muted-foreground mt-2">Always round UP to the nearest 0.25 cu yd when ordering from a ready-mix plant.</p>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
            <p className="text-sm font-bold text-accent mb-1">★ Pro Tip</p>
            <p className="text-sm text-muted-foreground">
              For a DIY bag pour, the 10% rule is non-negotiable. Bag concrete sets fast in warm weather — you cannot run to the hardware store mid-pour. For a pump truck delivery, add 10% for line waste plus 5% for sub-grade variation = 15% total on pours over 5 cu yd.
            </p>
          </div>
        </motion.div>

        {/* Thickness Science */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Thickness Science — 4", 5", and 6" Load-Bearing Capacity Explained
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Thickness is the most load-sensitive variable in slab design. Doubling thickness does not merely double strength — it increases flexural load capacity by a factor of four, because the slab's bending resistance scales with the square of its depth (Beam Theory, <a href="https://www.concrete.org/store/productdetail.aspx?ItemID=31819" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">ACI 318-19</a>). Choosing the wrong thickness is a structural decision, not just a cost calculation.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">4-Inch Slabs: Residential Light-Duty Standard</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The 4-inch (100 mm) slab is the minimum residential standard referenced in IRC Section R506 and ACI 302.1R for foot-traffic applications. It handles distributed loads up to approximately 50 lbs per square foot (PSF) on a stable sub-grade — sufficient for patios, sidewalks, pool decks, and covered walkways.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Typical applications: Patio, garden path, shed base, pool surround</li>
            <li>Concrete strength: Minimum 3,000 PSI (per ACI 318 Table 19.3.3.1)</li>
            <li>Reinforcement: 6×6 W1.4×W1.4 welded wire fabric (WWF)</li>
            <li>Sub-base: Minimum 4 inches of compacted granular fill</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">5-Inch Slabs: The Overlooked Sweet Spot</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The 5-inch slab delivers a 56% increase in flexural capacity over a 4-inch slab for only 25% more material. It is the preferred depth for driveways serving passenger vehicles, large outbuilding floors, and RV pads.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Typical applications: Residential driveway, workshop floor, large garage</li>
            <li>Concrete strength: 3,500 PSI recommended for vehicle traffic</li>
            <li>Reinforcement: #3 rebar at 18-inch O.C. grid OR 6×6 W2.9×W2.9 WWF</li>
            <li>Sub-base: 4–6 inches of compacted crushed stone (3/4" aggregate)</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">6-Inch Slabs: Heavy-Load and Commercial Standard</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            At 6 inches, the slab transitions into a structural element capable of supporting heavy vehicles, forklifts, and equipment loads. ACI 330R-14 specifies 6 inches as the minimum for standard vehicular parking, with 7–8 inches for truck traffic.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Typical applications: Two-car driveway, commercial parking, loading dock apron</li>
            <li>Concrete strength: 4,000 PSI minimum — specify air-entrained mix in freeze-thaw climates</li>
            <li>Reinforcement: #4 rebar at 18-inch O.C. in both directions, placed at mid-depth ± 1 inch</li>
            <li>Sub-base: 6 inches of compacted crushed stone with geotextile fabric layer</li>
          </ul>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
            <p className="text-sm font-bold text-accent mb-1">★ Pro Tip</p>
            <p className="text-sm text-muted-foreground">
              Specify your concrete mix by compressive strength (PSI) and slump (4–5 inches is ideal for most flatwork), not by the 'bag mix' label at the plant. For driveway projects in northern climates, always specify an air-entraining admixture. ACI 318 Table 26.4.3.1(e) mandates 5–7% air content for severe freeze-thaw exposure.
            </p>
          </div>
        </motion.div>

        {/* Bag Count Logic */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The Concrete Bag Count Logic — 80 lb, 60 lb, and 40 lb Bags Explained
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bagged concrete is measured by yield — the volume of mixed concrete one bag produces. Yield varies by bag size and mix design. Using the wrong yield figure turns a quick bag-count estimate into an expensive re-run to the hardware store.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">Standard Bag Yields (ASTM C387 Standard Mix)</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Bag Size</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Yield (cu ft)</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Yield (cu yd)</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Bags per Cu Yd</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2.5 px-4">40 lb</td><td className="py-2.5 px-4">0.30</td><td className="py-2.5 px-4">0.011</td><td className="py-2.5 px-4">~90 bags</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-4">60 lb</td><td className="py-2.5 px-4">0.45</td><td className="py-2.5 px-4">0.017</td><td className="py-2.5 px-4">~60 bags</td></tr>
                <tr><td className="py-2.5 px-4">80 lb</td><td className="py-2.5 px-4">0.60</td><td className="py-2.5 px-4">0.022</td><td className="py-2.5 px-4">~45 bags</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3">When to Use Bags vs. Ready-Mix</h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li><strong className="text-foreground">Under 0.5 cu yd:</strong> Use 80 lb bags. Mix in batches with a paddle mixer.</li>
            <li><strong className="text-foreground">0.5 – 1.0 cu yd:</strong> Use 80 lb bags or rent a drum mixer. Bags are still cost-effective.</li>
            <li><strong className="text-foreground">1.0 – 3.0 cu yd:</strong> Ready-mix becomes competitive. Compare delivered cost vs. bag cost + mixer rental.</li>
            <li><strong className="text-foreground">Over 3.0 cu yd:</strong> Always use ready-mix. Time, labour, and quality control all favour a truck delivery.</li>
          </ul>
        </motion.div>

        {/* Slab Size Comparison Table */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Concrete Slab Size Comparison Table — Cubic Yards &amp; Bag Count
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The table below covers the four most common slab sizes at both 4-inch and 6-inch depths. All bag counts include a 10% waste factor. Use our <Link to="/tools/slab-calculator" className="text-accent font-bold hover:underline">Concrete Slab Calculator</Link> above to generate precise figures for any custom dimensions.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-foreground">Slab Size (ft)</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Depth</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Cu. Yds.</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">80 lb Bags</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Typical Use</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">10×10</td><td className="py-2.5 px-3">4"</td><td className="py-2.5 px-3">0.62</td><td className="py-2.5 px-3">31</td><td className="py-2.5 px-3">Small patio / shed base</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">10×10</td><td className="py-2.5 px-3">6"</td><td className="py-2.5 px-3">0.93</td><td className="py-2.5 px-3">47</td><td className="py-2.5 px-3">Heavy-duty pad</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">12×12</td><td className="py-2.5 px-3">4"</td><td className="py-2.5 px-3">0.89</td><td className="py-2.5 px-3">44</td><td className="py-2.5 px-3">Patio / carport</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">12×12</td><td className="py-2.5 px-3">6"</td><td className="py-2.5 px-3">1.33</td><td className="py-2.5 px-3">67</td><td className="py-2.5 px-3">Single-car garage</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">15×15</td><td className="py-2.5 px-3">4"</td><td className="py-2.5 px-3">1.39</td><td className="py-2.5 px-3">70</td><td className="py-2.5 px-3">Large patio</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">15×15</td><td className="py-2.5 px-3">6"</td><td className="py-2.5 px-3">2.08</td><td className="py-2.5 px-3">104</td><td className="py-2.5 px-3">Driveway section</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">20×20</td><td className="py-2.5 px-3">4"</td><td className="py-2.5 px-3">2.47</td><td className="py-2.5 px-3">124</td><td className="py-2.5 px-3">Driveway apron</td></tr>
                <tr><td className="py-2.5 px-3">20×20</td><td className="py-2.5 px-3">6"</td><td className="py-2.5 px-3">3.70</td><td className="py-2.5 px-3">185</td><td className="py-2.5 px-3">Two-car driveway</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            * 80 lb bag yield = 0.022 cu yd. 60 lb bag yield = 0.017 cu yd. All counts rounded up to nearest whole bag with 10% waste factor applied.
          </p>
        </motion.div>

        {/* Sub-Base Preparation */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Sub-Base Preparation — The Foundation Your Calculation Depends On
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Accurate volume calculations mean nothing if the surface being filled is uneven or unstable. ACI 302.1R-15 dedicates an entire chapter to sub-grade and sub-base preparation because settlement cracks in slabs are more commonly caused by sub-base failure than concrete mix deficiencies.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">Compacted Gravel Sub-Base: Depth and Material Specification</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A granular sub-base serves two functions: it distributes the slab load to the native soil, and it provides a stable, level working surface with consistent thickness — directly affecting your concrete volume estimate.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li><strong className="text-foreground">Material:</strong> 3/4-inch crushed stone or compactable gravel (not pea gravel)</li>
            <li><strong className="text-foreground">Compaction:</strong> 95% Standard Proctor Density per ASTM D698</li>
            <li><strong className="text-foreground">Depth:</strong> 4 inches minimum for residential; 6 inches for vehicle loads; 8 inches on expansive clay soils</li>
            <li><strong className="text-foreground">Test:</strong> Probe with a steel rod — it should resist penetration beyond 6 inches after proper compaction</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">Vapor Barrier: Preventing Moisture Migration</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A 6-mil polyethylene sheet installed directly beneath the slab (ACI 302.1R Section 4.2.3) prevents ground moisture from wicking upward through the slab by capillary action.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Specification: ASTM E1745 Class A or Class B polyethylene sheet</li>
            <li>Installation: Lap seams 12 inches minimum, tape with compatible adhesive</li>
            <li>Coverage: Extend 6 inches beyond the slab perimeter under forms</li>
          </ul>
        </motion.div>

        {/* Reinforcement */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Reinforcement — Rebar Grades, WWF, and ACI 318 Spacing Requirements
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Concrete has excellent compressive strength but low tensile strength — roughly 10% of its compressive rating. Reinforcement (rebar or welded wire fabric) provides the tensile capacity the concrete itself cannot.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">Deformed Reinforcing Bar: Grade 40 vs. Grade 60</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Rebar grade refers to its minimum yield strength in ksi (thousand pounds per square inch). The two grades used in residential and light commercial flatwork are Grade 40 (40 ksi) and Grade 60 (60 ksi), designated per ASTM A615.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">Rebar Placement: Cover, Depth, and Spacing (ACI 318-19)</h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Minimum concrete cover: 1.5 inches for slabs not exposed to weather</li>
            <li>Cover for exterior slabs exposed to weather: 2 inches minimum</li>
            <li>Placement depth for 4" slab: Bar chair at 1.5" from bottom = bar centered at 2"</li>
            <li>Spacing: #3 at 18" O.C. for light residential; #4 at 18" O.C. for driveways; #4 at 12" O.C. for heavy loads</li>
            <li>Lap splices: Minimum 24 bar diameters (24 × 0.5" for #4 = 12" minimum lap)</li>
          </ul>
        </motion.div>

        {/* Pre-Pour Checklist */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Pre-Pour Checklist — 15 Steps Before You Order Concrete
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ordering concrete before your site is ready is the most expensive mistake in flatwork construction. Ready-mix concrete begins its hydration clock the moment water contacts cement — you typically have 90 minutes from the time of batching.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="surface-card p-5">
              <h3 className="font-bold text-foreground mb-3">Sub-Grade &amp; Formwork</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>✓ Sub-grade excavated to correct depth</li>
                <li>✓ Sub-base compacted to 95% Proctor density</li>
                <li>✓ Sub-base surface within 3/4" of design elevation</li>
                <li>✓ Vapor barrier installed with 12" overlapping seams</li>
                <li>✓ Formwork set to final grade, staked and secured</li>
                <li>✓ All form joints sealed</li>
              </ul>
            </div>
            <div className="surface-card p-5">
              <h3 className="font-bold text-foreground mb-3">Reinforcement</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>✓ Rebar or WWF placed per design</li>
                <li>✓ Concrete cover verified with bar chairs</li>
                <li>✓ Lap splices meet minimum length</li>
                <li>✓ All wire ties cut back</li>
              </ul>
            </div>
            <div className="surface-card p-5">
              <h3 className="font-bold text-foreground mb-3">Logistics &amp; Ordering</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>✓ Volume confirmed with <Link to="/tools/slab-calculator" className="text-accent hover:underline">Slab Calculator</Link></li>
                <li>✓ PSI, slump, air content specified</li>
                <li>✓ Truck access route confirmed</li>
                <li>✓ Crew and tools on site</li>
                <li>✓ Weather forecast checked</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Curing vs Drying */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Curing vs. Drying — Understanding the Chemical Process (ACI 308R)
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Curing and drying are two distinct processes that occur after a concrete pour. Conflating them is one of the most common errors in construction guides.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">Curing: The Chemical Reaction (Hydration)</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Curing is the chemical process of cement hydration — the reaction between portland cement particles and water that forms calcium silicate hydrate (C-S-H) crystals, the binding compound that gives concrete its strength. This reaction continues as long as adequate moisture and temperature conditions are maintained.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Hydration begins immediately upon water contact with cement</li>
            <li>Initial set (concrete no longer workable): 4–8 hours at 70°F</li>
            <li>Foot traffic safe: 24 hours minimum</li>
            <li>Vehicle traffic: 7 days (approximately 70% of 28-day design strength)</li>
            <li>28-day strength: Full design PSI achieved — ACI 318 uses 28-day f'c as the design standard</li>
            <li>Long-term strength: Concrete continues gaining strength for years if kept moist</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">Drying: Moisture Loss (Distinct from Curing)</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Drying is the physical evaporation of excess mix water from the concrete. A standard 4,000 PSI mix uses approximately 0.45 lbs of water per pound of cement for hydration; any water added beyond that eventually evaporates.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Concrete does not need to 'dry out' to gain strength — it needs to stay moist to cure</li>
            <li>Premature drying causes plastic shrinkage cracks within 4–8 hours of pouring</li>
            <li>A 4-inch slab takes approximately 30 days to reach 80% moisture equilibrium</li>
            <li>ASTM F2170: Internal relative humidity must be below 75% before installing adhesive floor coverings</li>
          </ul>
        </motion.div>

        {/* FAQ */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How many bags of concrete do I need for a 10×10 slab?</h3>
              <p className="text-muted-foreground leading-relaxed">
                For a standard 4-inch residential slab (10×10 ft), you need approximately 0.62 cubic yards of concrete. With a 10% waste factor, that equals 0.68 cu yd — or 31 bags of 80 lb concrete. Use the <Link to="/tools/slab-calculator" className="text-accent font-bold hover:underline">Concrete Slab Calculator</Link> above and select your bag size for an instant count.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">What is the difference between cubic yards and cubic feet for concrete?</h3>
              <p className="text-muted-foreground leading-relaxed">
                One cubic yard equals 27 cubic feet (3 ft × 3 ft × 3 ft). Concrete volume is always ordered and priced in cubic yards from ready-mix plants. The key formula is: Cubic Yards = (L × W × T in feet) ÷ 27.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Is a 4-inch slab strong enough for a car?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A 4-inch slab is marginal for vehicle loads. Passenger cars can be accommodated by a well-constructed 4-inch slab with proper sub-base, but ACI 330R-14 recommends 5 inches minimum for regular vehicle traffic. For driveways, specify 5–6 inches and 3,500 PSI concrete.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How long does concrete take to cure before driving on it?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A standard 3,500 PSI mix reaches approximately 70% of design strength at 7 days, which is the minimum for passenger vehicle traffic. Full 28-day design strength should be achieved before allowing heavy truck or equipment loads.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">What is the ACI standard for residential slab thickness?</h3>
              <p className="text-muted-foreground leading-relaxed">
                ACI 302.1R-15 and the International Residential Code (IRC R506) both specify a minimum 3.5-inch (90 mm) slab thickness for residential floors, with 4 inches as the practical construction standard. ACI 330R-14 governs parking and driveway applications, recommending 5–6 inches for vehicular traffic.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Summary: Use the Calculator, Then Trust the Engineering
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every number our <Link to="/tools/slab-calculator" className="text-accent font-bold hover:underline">Concrete Slab Calculator</Link> produces is grounded in the mathematics and standards detailed in this guide. The formula is straightforward — length × width × depth ÷ 27 — but the engineering behind how much to order, how thick to build, how to prepare the sub-base, and how to cure the finished slab is what separates a durable structure from an expensive repair project.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bookmark this guide as your on-site reference. And if you have questions not answered here, our tool pages cover every related calculation:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1.5 mb-6 list-disc list-inside">
            <li><Link to="/" className="text-accent font-bold hover:underline">Concrete Material Calculator</Link> — Estimate cement, sand &amp; aggregate quantities</li>
            <li><Link to="/tools" className="text-accent font-bold hover:underline">All Construction Tools</Link> — Browse our full tool directory</li>
          </ul>

          <h3 className="text-lg font-bold text-foreground mb-3">References</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• <a href="https://www.concrete.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">ACI 330R-14: Guide for the Design and Construction of Concrete Parking Lots — ACI Standards</a></li>
            <li>• <a href="https://www.cement.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Portland Cement Association: Design and Control of Concrete Mixtures</a></li>
            <li>• <a href="https://www.astm.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">ASTM C387: Standard Specification for Packaged, Dry, Combined Materials</a></li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
