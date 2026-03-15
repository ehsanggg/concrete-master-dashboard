import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function DetailedContent() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* What is a Concrete Calculator */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-black text-foreground tracking-tight mb-6">
            What is a Concrete Calculator?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A concrete calculator is an essential tool for construction professionals, contractors, and DIY enthusiasts. It helps you estimate the exact quantity of cement, sand, and coarse aggregate (gravel) needed for any concrete project — from small residential foundations to large commercial structures.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our calculator uses the standard volumetric method recommended by <strong className="text-foreground">IS 456</strong> and civil engineering guidelines. By entering the dimensions of your concrete work and selecting the appropriate mix grade, you get an accurate breakdown of all materials required, eliminating guesswork and reducing waste.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're pouring a simple patio slab, building a foundation wall, or estimating materials for a multi-story structure, this tool provides the precision you need to order the right amount of concrete — saving both time and money.
          </p>
        </motion.div>

        {/* Common Concrete Applications */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Common Concrete Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="surface-card p-5">
              <h3 className="font-bold text-foreground mb-3">🏠 Residential & Outdoor</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Patios, sidewalks & driveways</li>
                <li>• Garage, basement & shed pads</li>
                <li>• Stairs and steps</li>
                <li>• Fence & deck post footings</li>
                <li>• Raised beds & planters</li>
                <li>• Curbs and gutters</li>
              </ul>
            </div>
            <div className="surface-card p-5">
              <h3 className="font-bold text-foreground mb-3">🏗️ Foundations & Structural</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Strip & isolated footings</li>
                <li>• Grade beams</li>
                <li>• Foundation & retaining walls</li>
                <li>• Monolithic slabs</li>
                <li>• Square & round columns</li>
                <li>• Pile caps</li>
              </ul>
            </div>
            <div className="surface-card p-5">
              <h3 className="font-bold text-foreground mb-3">🏭 Commercial & Utility</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Warehouse & shop floor slabs</li>
                <li>• Loading dock aprons & ramps</li>
                <li>• Equipment & machine pads</li>
                <li>• Light pole & sign bases</li>
                <li>• Drainage channels & trenches</li>
                <li>• Bollards & barriers</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Recommended Thickness Guide */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Recommended Concrete Thickness Guide
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Always follow local building codes and engineering requirements. The values below are common starting points for planning and estimating.
          </p>
          <div className="surface-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-accent/10 border-b border-border">
                    <th className="text-left p-3 font-bold text-foreground">Project Type</th>
                    <th className="text-left p-3 font-bold text-foreground">Typical Thickness</th>
                    <th className="text-left p-3 font-bold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['Sidewalk / Walkway', '4 in (100 mm)', 'Light reinforcement or fiber recommended'],
                    ['Patio / Terrace', '4 in (100 mm)', 'Use compacted base; 4–5 in for heavy features'],
                    ['Driveway (cars)', '4–5 in (100–125 mm)', 'Go to 5–6 in for frequent truck use'],
                    ['Garage Slab', '4–5 in (100–125 mm)', 'Thicken edges where specified'],
                    ['Hot Tub / Spa Pad', '6 in (150 mm)', 'Confirm load with manufacturer'],
                    ['Shed / Outbuilding Pad', '4 in (100 mm)', 'Consider thickened edge or piers'],
                    ['Footings (strip)', '8–12 in (200–300 mm)', 'Width & depth are code/soil dependent'],
                    ['Foundation Wall', '8–10 in (200–250 mm)', 'Per structural engineer specifications'],
                  ].map(([type, thickness, notes]) => (
                    <tr key={type} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="p-3 font-medium text-foreground">{type}</td>
                      <td className="p-3">{thickness}</td>
                      <td className="p-3">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Understanding Concrete Mix Grades */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Understanding Concrete Mix Grades (IS 456)
          </h2>
          <div className="surface-card p-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Concrete grades indicate the compressive strength and mix proportions. The "<strong className="text-foreground">M</strong>" stands for Mix and the number represents the <strong className="text-foreground">compressive strength in MPa</strong> after 28 days of curing. The mix ratio defines the proportion of <strong className="text-foreground">Cement : Sand : Aggregate</strong> by volume.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { grade: 'M5 (1:5:10)', strength: '5 MPa', use: 'Lean concrete for leveling courses, flooring base, and non-structural bedding.' },
                { grade: 'M7.5 (1:4:8)', strength: '7.5 MPa', use: 'Mass concrete for foundations on firm soil, kerb backing, and filling.' },
                { grade: 'M10 (1:3:6)', strength: '10 MPa', use: 'Plain cement concrete (PCC) for foundations, boundary walls, and base courses.' },
                { grade: 'M15 (1:2:4)', strength: '15 MPa', use: 'Foundations for light residential structures, floor slabs, and pathways.' },
                { grade: 'M20 (1:1.5:3)', strength: '20 MPa', use: 'Most common grade. RCC slabs, beams, columns, footings in residential construction.' },
                { grade: 'M25 (1:1:2)', strength: '25 MPa', use: 'High-strength RCC for multi-story buildings, bridges, heavy load-bearing elements.' },
              ].map((item) => (
                <div key={item.grade} className="p-4 bg-secondary rounded-xl border border-border">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-foreground">{item.grade}</p>
                    <span className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-semibold">{item.strength}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* The Calculation Formula */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The Calculation Formula — Step by Step
          </h2>
          <div className="surface-card p-6 space-y-4 text-muted-foreground leading-relaxed">
            <div className="p-4 bg-secondary rounded-xl border border-border">
              <p className="font-bold text-foreground mb-1">Step 1 — Calculate Concrete Volume</p>
              <p>Volume = Length × Width × Depth (Thickness)</p>
              <p className="text-xs mt-1">Example: 10m × 5m × 0.15m = 7.5 m³</p>
            </div>
            <div className="p-4 bg-secondary rounded-xl border border-border">
              <p className="font-bold text-foreground mb-1">Step 2 — Calculate Wet Volume of Mix</p>
              <p>Wet Volume = Concrete Volume × (1 + 52.4/100)</p>
              <p className="text-xs mt-1">The 52.4% increase accounts for voids, sand bulking, and mixing losses. This is a standard factor used in civil engineering (IS 456).</p>
            </div>
            <div className="p-4 bg-secondary rounded-xl border border-border">
              <p className="font-bold text-foreground mb-1">Step 3 — Calculate Individual Material Volumes</p>
              <p>Using the mix ratio (e.g., M20 = 1:1.5:3, Sum = 5.5):</p>
              <div className="mt-2 pl-4 border-l-2 border-accent text-sm space-y-1">
                <p>Cement Volume = (1 / 5.5) × Wet Volume</p>
                <p>Sand Volume = (1.5 / 5.5) × Wet Volume</p>
                <p>Aggregate Volume = (3 / 5.5) × Wet Volume</p>
              </div>
            </div>
            <div className="p-4 bg-secondary rounded-xl border border-border">
              <p className="font-bold text-foreground mb-1">Step 4 — Convert to Weight & Bags</p>
              <div className="mt-1 text-sm space-y-1">
                <p>• Cement Bags = Cement Volume ÷ 0.035 <span className="text-xs">(1 bag = 0.035 m³ = 50 kg)</span></p>
                <p>• Sand Weight = Sand Volume × 1550 kg/m³</p>
                <p>• Aggregate Weight = Aggregate Volume × 1350 kg/m³</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Volume Formulas for Different Shapes */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Concrete Volume Formulas for Different Shapes
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            Our calculator handles rectangular slabs. For other shapes, calculate the volume first, then use our material ratio breakdown.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { shape: '📐 Rectangular Slab', formula: 'V = Length × Width × Depth', example: '10ft × 12ft × 4in = 40 ft³ = 1.48 yd³' },
              { shape: '⭕ Round Column', formula: 'V = π × r² × Height', example: 'r = 6in, H = 8ft → V = 6.28 ft³' },
              { shape: '🔵 Circular Slab', formula: 'V = π × (D/2)² × Depth', example: 'D = 10ft, Depth = 4in → V = 26.18 ft³' },
              { shape: '🧱 Wall', formula: 'V = Thickness × Length × Height', example: '8in × 20ft × 8ft = 106.67 ft³' },
              { shape: '🔲 Footing', formula: 'V = Width × Length × Depth', example: '2ft × 30ft × 1ft = 60 ft³ = 2.22 yd³' },
              { shape: '🪜 Steps / Stairs', formula: 'V = Width × Σ(Riser × Tread)', example: 'Calculate each step individually and sum' },
            ].map((item) => (
              <div key={item.shape} className="surface-card p-5">
                <h3 className="font-bold text-foreground text-sm mb-2">{item.shape}</h3>
                <p className="text-sm text-accent font-mono font-semibold mb-1">{item.formula}</p>
                <p className="text-xs text-muted-foreground">{item.example}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tips for Accurate Estimates */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Tips for Accurate Concrete Estimates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '📏', title: 'Break Down Irregular Shapes', desc: 'Divide complex areas into rectangles, circles, and trapezoids. Calculate each volume separately and add the totals.' },
              { icon: '📐', title: 'Account for Slopes', desc: 'For sloped slabs, use Average Thickness = (minimum + maximum thickness) ÷ 2 for a more accurate estimate.' },
              { icon: '➕', title: 'Add 5–10% Overage', desc: 'Always order 5–10% extra concrete to account for spillage, uneven subgrade, and slight variations in measurement.' },
              { icon: '📊', title: 'Keep Units Consistent', desc: 'Ensure all measurements are in the same unit system (metric or imperial) before calculating to avoid errors.' },
              { icon: '🧪', title: 'Test Soil Conditions', desc: 'Soft or uneven ground may absorb concrete. Consider soil compaction and place a sub-base of gravel for better results.' },
              { icon: '🌡️', title: 'Consider Weather', desc: 'Hot weather accelerates curing (may cause cracking). Cold weather slows it. Plan pours for moderate temperatures when possible.' },
            ].map((tip) => (
              <div key={tip.title} className="surface-card p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground text-sm">{tip.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Use Our Calculator */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why Use Our Concrete Calculator?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🎯', title: 'Government-Standard Formulas', desc: 'Uses IS 456 standard formulas and verified material densities (Cement: 1428.57 kg/m³, Sand: 1550 kg/m³, Aggregate: 1350 kg/m³).' },
              { icon: '💰', title: 'Instant Cost Estimation', desc: 'Add your local material prices to get an instant budget estimate — cement per bag, sand per ton, and aggregate per ton.' },
              { icon: '📊', title: 'Full Step-by-Step Breakdown', desc: 'Every calculation is shown with complete formulas so you can verify and learn the engineering logic behind each result.' },
              { icon: '🔄', title: 'Metric & Imperial Support', desc: 'Switch between meters/cm and feet/inches instantly. Results automatically convert for your convenience.' },
              { icon: '📱', title: 'Works on Any Device', desc: 'Fully responsive design — use it on your phone at the construction site or on desktop at the office.' },
              { icon: '🆓', title: '100% Free, No Signup', desc: 'No account required, no limits on calculations. Use it as many times as you need for any project.' },
            ].map((f) => (
              <div key={f.title} className="surface-card p-5 text-center">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="font-bold text-foreground mt-3 text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {[
              { q: 'What is the 52.4% wastage factor?', a: 'The 52.4% increase converts dry volume to the wet volume of mix. This accounts for voids between dry materials, bulking of sand when wet, and losses during mixing and transportation. This is a standard factor used in civil engineering as per IS 456 guidelines.' },
              { q: 'How many bags of cement do I need per cubic meter?', a: 'It depends on the concrete grade. For M20 (1:1.5:3), you need approximately 8.22 bags per cubic meter. For M15 (1:2:4), it\'s about 6.34 bags. For M10 (1:3:6), approximately 4.34 bags per cubic meter.' },
              { q: 'What is the most common concrete grade for residential use?', a: 'M20 (1:1.5:3) is the most commonly used grade for general residential construction including slabs, beams, columns, and footings. It provides 20 MPa compressive strength after 28 days of curing.' },
              { q: 'How do I calculate concrete for a 10×10 slab?', a: 'For a 10ft × 10ft slab at 4 inches thick: Volume = 10 × 10 × (4/12) = 33.33 ft³ = 0.94 m³. Using M20 grade with 52.4% wastage, you\'d need approximately 7.76 bags of cement, 0.39 tons of sand, and 0.68 tons of aggregate.' },
              { q: 'What is the difference between M20 and M25 concrete?', a: 'M20 has a mix ratio of 1:1.5:3 and achieves 20 MPa strength — suitable for most residential work. M25 has a ratio of 1:1:2 and achieves 25 MPa — used for heavy-duty structural elements, bridges, and multi-story buildings.' },
              { q: 'Should I use ready-mix concrete or mix on site?', a: 'For small projects (under 1-2 cubic meters), site mixing with bags is practical. For larger projects like driveways, foundations, or slabs over 2 m³, ordering ready-mix from a batching plant is more efficient, consistent, and often more cost-effective.' },
              { q: 'Can I use this calculator for circular or irregular shapes?', a: 'This calculator is designed for rectangular/slab-shaped pours. For circular columns, use V = π × r² × h to find the volume first. For irregular shapes, break them into simple shapes, calculate each, and sum the volumes.' },
              { q: 'How much does 1 cubic meter of concrete weigh?', a: 'Standard concrete weighs approximately 2,400 kg (2.4 tonnes) per cubic meter. Lightweight concrete ranges from 1,200–1,800 kg/m³, while heavyweight concrete can exceed 3,000 kg/m³ depending on the aggregate used.' },
              { q: 'What is the curing time for concrete?', a: 'Concrete reaches about 50% strength in 3 days, 75% in 7 days, and design strength (100%) in 28 days under proper curing conditions. Keep the surface moist for at least 7 days for best results. In hot climates, curing is even more critical.' },
            ].map((faq) => (
              <div key={faq.q} className="surface-card p-5">
                <h3 className="font-bold text-foreground text-sm">{faq.q}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Unit Conversion Reference */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Quick Unit Conversion Reference
          </h2>
          <div className="surface-card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p className="font-bold text-foreground mb-2">Length</p>
                <p>1 meter = 3.281 feet = 39.37 inches</p>
                <p>1 foot = 0.3048 meters = 12 inches</p>
                <p>1 yard = 3 feet = 0.9144 meters</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-foreground mb-2">Volume</p>
                <p>1 m³ = 35.315 ft³ = 1.308 yd³</p>
                <p>1 cubic yard = 27 ft³ = 0.7646 m³</p>
                <p>1 cubic foot = 0.0283 m³</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-foreground mb-2">Weight</p>
                <p>1 kg = 2.205 lbs</p>
                <p>1 metric ton = 1000 kg = 2,205 lbs</p>
                <p>1 bag of cement = 50 kg = 110 lbs</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-foreground mb-2">Key Constants</p>
                <p>1 bag cement = 0.035 m³</p>
                <p>Sand density = 1,550 kg/m³</p>
                <p>Aggregate density = 1,350 kg/m³</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
