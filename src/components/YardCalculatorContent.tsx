import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Truck, Calculator, HardHat } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export function YardCalculatorContent() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-12">
      {/* Intro */}
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
          Concrete Yard Calculator — Estimate Cubic Yards with Contractor Precision
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Whether you are pouring a backyard patio on a Saturday morning or overseeing a 30-truck commercial foundation pour, the math behind your concrete order is identical — and the cost of getting it wrong is always the same. This guide walks you through the exact cubic yard formula used by professional ready-mix suppliers, explains why the standard 27 cubic feet divisor exists, and shows you project-specific yardage figures for driveways, patios, footings, and retaining walls. Use the calculator above for your instant result, then read on for the engineering context that will make you a smarter buyer.
        </p>
      </motion.div>

      {/* Why One Cubic Yard Error Costs You */}
      <motion.div {...fadeUp} className="surface-card p-6 border-l-4 border-l-destructive">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <h2 className="text-xl font-black text-foreground">Why One Cubic Yard Error Costs You $150 and a Cold Joint</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Concrete does not forgive a short order. Picture this: your crew is halfway through a 24 × 24 garage slab pour. The truck driver signals he is running low. You are 0.5 yards short. The batch plant is 45 minutes away. By the time the second truck arrives, the first section has already begun its initial set. You pour fresh concrete against hardened concrete. The result is a <strong className="text-foreground">cold joint</strong> — a structural weak plane running across your slab where the two pours bonded imperfectly.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Most ready-mix plants charge a <strong className="text-foreground">short load fee of $30 to $75 per cubic yard</strong> on orders that fall below their minimum delivery threshold — typically 4 to 5 cubic yards. For that half-yard emergency order, you may pay $100 to $150 in premium delivery charges on top of the concrete itself, which runs $125 to $170 per cubic yard across most U.S. markets in 2025.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Over-ordering carries its own penalty. Concrete hardens in the drum. It cannot be returned, re-bagged, or saved for later. Ordering two extra yards on a residential patio means $250 to $340 in material you pay to have hauled back to the plant. Both mistakes trace back to the same root cause: an imprecise cubic yardage estimate.
        </p>
        <div className="mt-4 p-3 bg-secondary rounded-xl">
          <p className="text-sm font-bold text-foreground">
            <CheckCircle className="w-4 h-4 inline mr-1 text-accent" />
            Quick Takeaway: Under-ordering risks a cold joint and a short-load fee. Over-ordering wastes $250+ in material. Both are preventable with a correct cubic yardage calculation before you call the plant.
          </p>
        </div>
      </motion.div>

      {/* The Cubic Yard Formula */}
      <motion.div {...fadeUp}>
        <h2 className="text-2xl font-black text-foreground mb-4">The Cubic Yard Formula — Engineering Logic Behind Every Pour</h2>

        <h3 className="text-lg font-bold text-foreground mt-6 mb-2">Why Concrete Is Measured in Cubic Yards, Not Square Feet</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Square footage tells you how much ground your slab covers. Cubic yardage tells you how much material is needed to fill that space at a given thickness. A 400-square-foot patio at 4 inches thick requires just 4.94 cubic yards — less than a half-load from a standard transit mixer. At 6 inches thick, the same footprint demands 7.41 cubic yards. The difference is $300 to $425 in material cost.
        </p>

        <h3 className="text-lg font-bold text-foreground mt-6 mb-2">The Formula Step-by-Step: Why You Always Divide by 27</h3>
        <div className="surface-dark p-5 my-4">
          <p className="text-accent font-black text-lg mb-2">Cubic Yards = (Length × Width × Depth in feet) ÷ 27</p>
          <p className="text-primary-foreground/60 text-sm">
            The denominator — 27 cubic feet — reflects a geometric fact: one cubic yard is a perfect cube measuring exactly three feet on every side (3 × 3 × 3 = 27). ASTM C94/C94M governs the production and delivery of every transit mixer truck in the United States.
          </p>
        </div>

        <h3 className="text-lg font-bold text-foreground mt-6 mb-2">The Depth Conversion: Where Most Errors Happen</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If your slab is 4 inches thick, the depth value in the formula is not 4. It is <strong className="text-foreground">4 ÷ 12 = 0.333 feet</strong>. Entering 4 instead of 0.333 produces a result more than three times too high.
        </p>

        <div className="surface-card p-5 mb-4">
          <h4 className="font-bold text-foreground mb-2">Worked Example: 10 × 10 Slab at 4 Inches Thick</h4>
          <p className="text-sm text-muted-foreground font-mono">
            10 × 10 × (4 ÷ 12) ÷ 27 = 10 × 10 × 0.333 ÷ 27 = 33.33 ÷ 27 = <strong className="text-foreground">1.23 cubic yards</strong><br />
            Round to 1.25 yd³ (nearest quarter-yard). Add 10% for DIY: order <strong className="text-foreground">1.50 yd³</strong>.
          </p>
        </div>

        <div className="surface-card p-5">
          <h4 className="font-bold text-foreground mb-2">
            <Calculator className="w-4 h-4 inline mr-1 text-accent" />
            The Magic Number 81 — A Field Shortcut for 4-Inch Slabs
          </h4>
          <p className="text-sm text-muted-foreground">
            One cubic yard covers <strong className="text-foreground">81 square feet</strong> at exactly 4 inches thick. Divide your total square footage by 81 for a fast field estimate. At 5 inches, coverage drops to 64.8 sq ft/yd; at 6 inches, to 54 sq ft/yd.
          </p>
        </div>
      </motion.div>

      {/* Driveways */}
      <motion.div {...fadeUp}>
        <h2 className="text-2xl font-black text-foreground mb-4">Concrete Yardage by Project Type</h2>

        <h3 className="text-lg font-bold text-foreground mt-6 mb-2">Concrete Driveway — The 4-Inch vs. 6-Inch Decision</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A 4-inch slab with 6×6 wire mesh handles passenger cars and light pickups at 3,000–3,500 psi. The moment a concrete mixer, loaded delivery truck, or RV uses that driveway regularly, you need 5 to 6 inches minimum at 4,000 psi. The subgrade must be compacted to 95% Proctor density. Use our <Link to="/tools/slab-calculator" className="text-accent font-bold hover:underline">Concrete Slab Calculator</Link> for detailed slab estimates with rebar options.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-bold text-foreground">Driveway Size</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Thickness</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Cubic Yards</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">+5% Waste</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Order This</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50"><td className="py-2 px-3">16 × 30 (1-car)</td><td className="py-2 px-3">4 in</td><td className="py-2 px-3">5.93 yd³</td><td className="py-2 px-3">6.22 yd³</td><td className="py-2 px-3 font-bold text-foreground">6.25 yd³</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">24 × 24 (2-car)</td><td className="py-2 px-3">4 in</td><td className="py-2 px-3">7.11 yd³</td><td className="py-2 px-3">7.47 yd³</td><td className="py-2 px-3 font-bold text-foreground">7.50 yd³</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">24 × 24 (trucks/RVs)</td><td className="py-2 px-3">6 in</td><td className="py-2 px-3">10.67 yd³</td><td className="py-2 px-3">11.20 yd³</td><td className="py-2 px-3 font-bold text-foreground">11.25 yd³</td></tr>
              <tr><td className="py-2 px-3">30 × 50 (commercial)</td><td className="py-2 px-3">6 in</td><td className="py-2 px-3">27.78 yd³</td><td className="py-2 px-3">29.17 yd³</td><td className="py-2 px-3 font-bold text-foreground">29.25 yd³</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          Cost difference between 4" and 6" on a 24×24 slab at $145/yd³ is approximately <strong className="text-foreground">$510</strong>. Specify the correct thickness now or pay twice later.
        </p>
      </motion.div>

      {/* Patios */}
      <motion.div {...fadeUp}>
        <h3 className="text-lg font-bold text-foreground mt-2 mb-2">Patio Concrete — Waste Factors and Irregular Shapes</h3>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Residential patios pour at 4 inches on compacted granular subgrade. Spillage allowance for a rectangular patio with an experienced crew is 5%. For DIY pours, 10% is recommended. Irregular shapes — L-shapes, freeform curves — should be broken into rectangles, calculated individually, then summed. Add 3–5% for form flex and edge bleed.
        </p>
        <div className="surface-card p-5 mb-4">
          <h4 className="font-bold text-foreground mb-2">20 × 20 Patio Example (4 inches thick)</h4>
          <p className="text-sm text-muted-foreground font-mono">
            20 × 20 × 0.333 ÷ 27 = 4.94 yd³ → +10% DIY waste = 5.43 yd³ → <strong className="text-foreground">Order 5.50 yd³</strong>
          </p>
        </div>
      </motion.div>

      {/* Footings */}
      <motion.div {...fadeUp}>
        <h3 className="text-lg font-bold text-foreground mt-2 mb-2">Concrete Footings — ACI CODE-318-25 Minimum Requirements</h3>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Footings are not flatwork. ACI CODE-318-25 sets firm minimums: reinforced footings bearing on soil must be no less than 6 inches thick, and concrete cover over steel reinforcement in contact with soil must be a minimum of 3 inches. For strip footings under residential foundation walls: 8 to 12 inches thick, width typically 1.5 to 2× the wall thickness.
        </p>
        <div className="surface-card p-5 mb-3">
          <h4 className="font-bold text-foreground mb-2">Strip Footing Example: 40 ft long, 18" wide, 10" deep</h4>
          <p className="text-sm text-muted-foreground font-mono">
            40 × 1.5 ft × 0.833 ft ÷ 27 = 1.85 yd³ → <strong className="text-foreground">Order 2.0 yd³</strong>
          </p>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          For projects requiring fewer than 1.5 yd³ total, compare the cost of 45 bags of 80-lb concrete (~$270) against a ready-mix short order plus delivery fee. <Link to="/tools/bag-calculator" className="text-accent font-bold hover:underline">→ Use our Concrete Bag Calculator</Link> to run this comparison instantly.
        </p>
        <div className="p-3 bg-accent/5 border border-accent/10 rounded-xl text-xs text-muted-foreground">
          <HardHat className="w-4 h-4 inline mr-1 text-accent" />
          <strong className="text-foreground">Engineering Disclaimer:</strong> Footing design must be reviewed and stamped by a licensed structural engineer for any load-bearing application. Cubic yardage figures are for material estimation only.
        </div>
      </motion.div>

      {/* Retaining Walls */}
      <motion.div {...fadeUp}>
        <h3 className="text-lg font-bold text-foreground mt-2 mb-2">Retaining Wall Concrete</h3>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Poured concrete retaining walls require calculating both the wall face and footing separately. Wall panel: Length × Thickness × Height ÷ 27. Wall footing: Length × Footing Width × Footing Depth ÷ 27. Add both totals, then apply 10–15% spillage allowance.
        </p>
        <div className="surface-card p-5">
          <h4 className="font-bold text-foreground mb-2">20-ft Retaining Wall (3 ft tall, 8" wall, 24"×12" footing)</h4>
          <p className="text-sm text-muted-foreground font-mono">
            Wall: 20 × 0.667 × 3 ÷ 27 = 1.48 yd³<br />
            Footing: 20 × 2.0 × 1.0 ÷ 27 = 1.48 yd³<br />
            Combined: 2.96 yd³ + 12% waste = 3.32 yd³ → <strong className="text-foreground">Order 3.50 yd³</strong>
          </p>
        </div>
      </motion.div>

      {/* Waste Factor Deep Dive */}
      <motion.div {...fadeUp}>
        <h2 className="text-2xl font-black text-foreground mb-4">The 10% Waste Factor — Myth vs. Field Reality</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Ten percent is a generic starting point, not a universal standard. Your actual spillage allowance should reflect four real-world variables:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-bold text-foreground">Project Type</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Crew Experience</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Recommended Waste</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Rationale</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50"><td className="py-2 px-3">Simple rectangular slab</td><td className="py-2 px-3">Professional</td><td className="py-2 px-3 font-bold text-foreground">5%</td><td className="py-2 px-3">Experienced screeding, firm subgrade</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">Simple rectangular slab</td><td className="py-2 px-3">DIY / first pour</td><td className="py-2 px-3 font-bold text-foreground">10%</td><td className="py-2 px-3">Form flex + leveling errors</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">L-shape or multi-section</td><td className="py-2 px-3">Any</td><td className="py-2 px-3 font-bold text-foreground">10–12%</td><td className="py-2 px-3">Multiple pour joints and edge bleed</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">Retaining wall</td><td className="py-2 px-3">Any</td><td className="py-2 px-3 font-bold text-foreground">12–15%</td><td className="py-2 px-3">Lateral form pressure, subgrade variation</td></tr>
              <tr><td className="py-2 px-3">Irregular / curved</td><td className="py-2 px-3">Any</td><td className="py-2 px-3 font-bold text-foreground">15%</td><td className="py-2 px-3">Unavoidable edge bleed and form movement</td></tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Short Load Fees */}
      <motion.div {...fadeUp}>
        <h2 className="text-xl font-black text-foreground mb-3">Short Load Fees and Ready-Mix Truck Logistics</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          A standard transit mixer drum holds 8 to 10 cubic yards of ready-mix concrete, as specified under ASTM C94. Most plants set a minimum of 1 yd³, but short load fees begin at 4–5 yd³. Below that threshold, expect $30–75 extra per yard.
        </p>
        <div className="surface-card p-5">
          <h4 className="font-bold text-foreground mb-3">Practical Ordering Rules That Save Money</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
            <li>Always call the plant first. Ask about the short-load threshold and fee.</li>
            <li>Round up to the nearest <strong className="text-foreground">0.25 yard increment</strong>. Plants sell in quarter-yard steps.</li>
            <li>Confirm truck access: 10-ft clearance, firm ground for 40,000 lbs GVW, ~40-ft turning radius.</li>
            <li>Schedule for early morning — a 7 AM pour gives 60–90 minutes of working time vs. 30 minutes at noon in summer heat.</li>
          </ul>
        </div>
      </motion.div>

      {/* Weight Table */}
      <motion.div {...fadeUp}>
        <h2 className="text-xl font-black text-foreground mb-3">Concrete Weight and Sub-Base Load Planning</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Standard concrete weighs approximately <strong className="text-foreground">4,050 pounds per cubic yard</strong> (150 lbs/cu ft).
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-bold text-foreground">Cubic Yards</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Cubic Feet</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Weight (lbs)</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Weight (tons)</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">80-lb Bags</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50"><td className="py-2 px-3">0.5</td><td className="py-2 px-3">13.5</td><td className="py-2 px-3">2,025</td><td className="py-2 px-3">1.01</td><td className="py-2 px-3">23</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">1</td><td className="py-2 px-3">27</td><td className="py-2 px-3">4,050</td><td className="py-2 px-3">2.03</td><td className="py-2 px-3">45</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">2</td><td className="py-2 px-3">54</td><td className="py-2 px-3">8,100</td><td className="py-2 px-3">4.05</td><td className="py-2 px-3">90</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">3</td><td className="py-2 px-3">81</td><td className="py-2 px-3">12,150</td><td className="py-2 px-3">6.08</td><td className="py-2 px-3">135</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">5</td><td className="py-2 px-3">135</td><td className="py-2 px-3">20,250</td><td className="py-2 px-3">10.13</td><td className="py-2 px-3">225</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">7</td><td className="py-2 px-3">189</td><td className="py-2 px-3">28,350</td><td className="py-2 px-3">14.18</td><td className="py-2 px-3">315</td></tr>
              <tr><td className="py-2 px-3">10</td><td className="py-2 px-3">270</td><td className="py-2 px-3">40,500</td><td className="py-2 px-3">20.25</td><td className="py-2 px-3">450</td></tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Ready-Mix vs Bagged */}
      <motion.div {...fadeUp}>
        <h2 className="text-xl font-black text-foreground mb-3">Ready-Mix vs. Bagged Concrete — How to Choose</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The break-even point is approximately <strong className="text-foreground">1 to 1.5 cubic yards</strong>. Below that, bagged concrete avoids truck delivery and short-load fees. Above 1.5 yd³, ready-mix wins on cost, consistency, and labor. Use our <Link to="/tools/bag-calculator" className="text-accent font-bold hover:underline">Concrete Bag Calculator</Link> for small pours.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-bold text-foreground">Factor</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Bagged Concrete</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Ready-Mix Concrete</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">Minimum qty</td><td className="py-2 px-3">No minimum</td><td className="py-2 px-3">1 yd³ min; short-load fees below 4–5 yd³</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">Cost per yd³</td><td className="py-2 px-3">~$270 (80-lb bags at $6)</td><td className="py-2 px-3">$125–$170 delivered (2025 rates)</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">Best for</td><td className="py-2 px-3">Under 1 yd³ (sonotubes, small footings)</td><td className="py-2 px-3">1.5+ yd³ slabs, driveways, foundations</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">Mix consistency</td><td className="py-2 px-3">Variable (hand mixing)</td><td className="py-2 px-3">Consistent — ASTM C94 spec</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">Labor</td><td className="py-2 px-3">High (80-lb bags are demanding)</td><td className="py-2 px-3">Low — crew focuses on finishing</td></tr>
              <tr><td className="py-2 px-3 font-medium text-foreground">Structural quality</td><td className="py-2 px-3">Acceptable for non-structural flatwork</td><td className="py-2 px-3">Required for footings, columns (ACI 318-25)</td></tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Yardage Reference Table */}
      <motion.div {...fadeUp}>
        <h2 className="text-xl font-black text-foreground mb-3">Quick Yardage Reference — Standard Slab Sizes at 4" and 6"</h2>
        <p className="text-sm text-muted-foreground mb-4">All figures include 10% waste factor for DIY pours.</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-bold text-foreground">Slab Size</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">4" (yd³)</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">6" (yd³)</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Order 4"+10%</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Order 6"+10%</th>
                <th className="text-left py-2 px-3 font-bold text-foreground">Bags (4")</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50"><td className="py-2 px-3">10 × 10</td><td className="py-2 px-3">1.23</td><td className="py-2 px-3">1.85</td><td className="py-2 px-3">1.50</td><td className="py-2 px-3">2.00</td><td className="py-2 px-3">56</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">12 × 12</td><td className="py-2 px-3">1.78</td><td className="py-2 px-3">2.67</td><td className="py-2 px-3">2.00</td><td className="py-2 px-3">3.00</td><td className="py-2 px-3">81</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">16 × 20</td><td className="py-2 px-3">3.95</td><td className="py-2 px-3">5.93</td><td className="py-2 px-3">4.50</td><td className="py-2 px-3">6.50</td><td className="py-2 px-3">180</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">20 × 20</td><td className="py-2 px-3">4.94</td><td className="py-2 px-3">7.41</td><td className="py-2 px-3">5.50</td><td className="py-2 px-3">8.25</td><td className="py-2 px-3">225</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">24 × 24</td><td className="py-2 px-3">7.11</td><td className="py-2 px-3">10.67</td><td className="py-2 px-3">7.75</td><td className="py-2 px-3">11.75</td><td className="py-2 px-3">323</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">24 × 30</td><td className="py-2 px-3">8.89</td><td className="py-2 px-3">13.33</td><td className="py-2 px-3">9.75</td><td className="py-2 px-3">14.75</td><td className="py-2 px-3">405</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">30 × 30</td><td className="py-2 px-3">11.11</td><td className="py-2 px-3">16.67</td><td className="py-2 px-3">12.25</td><td className="py-2 px-3">18.50</td><td className="py-2 px-3">505</td></tr>
              <tr><td className="py-2 px-3">40 × 40</td><td className="py-2 px-3">19.75</td><td className="py-2 px-3">29.63</td><td className="py-2 px-3">21.75</td><td className="py-2 px-3">32.75</td><td className="py-2 px-3">898</td></tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div {...fadeUp}>
        <h2 className="text-2xl font-black text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: 'How do I calculate yards of concrete I need?', a: 'Use the formula: (Length × Width × Depth in feet) ÷ 27 = Cubic Yards. Convert all measurements to feet first — inches must be divided by 12. Then add your waste factor (5% for professional pours, 10% for DIY) and round up to the nearest 0.25 cubic yard.' },
            { q: 'How many cubic yards is a 24×24 garage slab?', a: 'A 24×24 slab at 4 inches thick requires 7.11 cubic yards. Add 5% waste and round up: order 7.50 yd³. At 6 inches thick (for heavy vehicles), the calculation gives 10.67 yd³; order 11.25 yd³.' },
            { q: 'How much does 1 yard of concrete cover?', a: 'One cubic yard covers 81 sq ft at exactly 4 inches thick. At 5 inches: 64.8 sq ft. At 6 inches: 54 sq ft.' },
            { q: 'How many 80-lb bags make a cubic yard?', a: 'Approximately 45 bags of 80-lb concrete equal one cubic yard. For 60-lb bags: 60 per yard; for 40-lb: 90 per yard. At ~$6/bag, that\'s $270/yd³ vs. $125–$170 for ready-mix delivered.' },
            { q: 'How much does a yard of concrete weigh?', a: 'Standard structural concrete weighs approximately 4,050 pounds (~2 tons) per cubic yard, based on 150 lbs/cu ft density.' },
            { q: 'Should I add a waste factor when ordering concrete?', a: 'Always. Minimum 5% for simple rectangular pours with an experienced crew. 10% for standard DIY flatwork. 15% for irregular shapes, retaining walls, or first pours.' },
            { q: 'What is a short load fee for concrete?', a: 'A surcharge by ready-mix plants when your order falls below 4–5 yd³ minimum. Typically $30–$75 per yd³ below the threshold. Always ask before ordering.' },
            { q: 'How thick should a concrete driveway be?', a: 'For passenger cars: 4 inches at 3,000–3,500 psi with wire mesh. For trucks/RVs: 5–6 inches at 4,000 psi minimum.' },
            { q: 'Can I use this calculator for footings and piers?', a: 'Yes. For rectangular footings, use Length × Width × Depth (ft) ÷ 27. For cylindrical sonotube piers: π × radius² × height ÷ 27. ACI CODE-318-25 requires minimum 6-inch thickness for reinforced footings.' },
            { q: 'What is the minimum concrete order from a ready-mix plant?', a: 'Most plants have a technical minimum of 1 yd³, but short-load fees begin at 4–5 yd³. For orders under 1.5 yd³, bagged concrete is usually more economical.' },
          ].map((item) => (
            <div key={item.q} className="surface-card p-5">
              <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
              <p className="text-sm text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pre-Order Checklist */}
      <motion.div {...fadeUp} className="surface-dark p-6">
        <h2 className="text-xl font-black mb-4">Before You Call the Ready-Mix Plant — Your 10-Point Pre-Order Checklist</h2>
        <ol className="list-decimal list-inside text-sm text-primary-foreground/80 space-y-2">
          <li>Measure all three dimensions in feet with sub-inch precision. Confirm with a second crew member.</li>
          <li>Convert depth correctly: 4 in = 0.333 ft. 5 in = 0.417 ft. 6 in = 0.500 ft.</li>
          <li>Apply the correct waste factor: 5% professional, 10% DIY, 15% irregular/retaining walls.</li>
          <li>Round up to the nearest 0.25 yd³. Always round up, never down.</li>
          <li>Call the plant — ask about minimum orders and short-load fee thresholds.</li>
          <li>Verify truck access: 10-ft clearance, firm ground for 40,000 lbs, ~40-ft turning radius.</li>
          <li>Compact subgrade to 95% Proctor density. Fix soft spots before the truck arrives.</li>
          <li>Set, oil, and stake forms — then test for flex under load.</li>
          <li>Place reinforcement at mid-slab depth per ACI CODE-318-25.</li>
          <li>Schedule pour before 11 AM in warm weather for maximum working time.</li>
        </ol>
      </motion.div>

      {/* Related Tools */}
      <motion.div {...fadeUp}>
        <h3 className="text-lg font-bold text-foreground mb-4">Related Calculators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/tools/bag-calculator" className="surface-card p-5 hover:shadow-lg transition-shadow group">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-accent" />
              <h4 className="font-bold text-foreground">Concrete Bag Calculator</h4>
            </div>
            <p className="text-sm text-muted-foreground">For pours under 1.5 yd³ — find exact bag counts for 40, 60, and 80 lb sizes.</p>
          </Link>
          <Link to="/tools/slab-calculator" className="surface-card p-5 hover:shadow-lg transition-shadow group">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-5 h-5 text-accent" />
              <h4 className="font-bold text-foreground">Concrete Slab Calculator</h4>
            </div>
            <p className="text-sm text-muted-foreground">With rebar, mesh options, and material breakdown for any concrete grade.</p>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
