import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function BagCalculatorContent() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Intro */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-black text-foreground tracking-tight mb-6">
            Concrete Bag Calculator: How Many Bags of Concrete Do You Need?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Use the <strong className="text-foreground">Concrete Bag Calculator</strong> above to get your instant bag count — then read this guide to understand exactly how the numbers work. From the yield formula to brand-specific specs and project-by-project bag counts, everything a homeowner or contractor needs before heading to the hardware store is covered here. Whether you are setting 2 bags for a fence post or calculating 185 bags for a driveway, accurate calculation starts with understanding bag yield, volume, and the waste factor that protects every pour.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link to="/" className="text-accent font-bold hover:underline">→ Concrete Material Calculator</Link>
            <Link to="/tools/slab-calculator" className="text-accent font-bold hover:underline">→ Slab Calculator</Link>
            <Link to="/tools" className="text-accent font-bold hover:underline">→ All Tools</Link>
          </div>
        </motion.div>

        {/* 3-Step Formula */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The Concrete Bag Count Formula: From Volume to Bags in 3 Steps
          </h2>

          <h3 className="text-xl font-bold text-foreground mb-3">Step 1 — Calculate Your Concrete Volume</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every bag count calculation starts with volume. The formula depends on the shape of your pour.
          </p>

          <div className="surface-card p-5 mb-4">
            <h4 className="font-bold text-foreground mb-2">Rectangular Pours (Slabs, Patios, Footings)</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Volume (cu ft) = Length (ft) × Width (ft) × Thickness (ft)</p>
              <p>Convert thickness first: 4" = 0.333 ft | 6" = 0.500 ft</p>
              <p>Then convert to cubic yards: Cubic Yards = Volume (cu ft) ÷ 27</p>
              <p className="mt-2"><strong className="text-foreground">Worked example</strong> — 10 × 10 ft slab at 4" depth:</p>
              <p>10 × 10 × 0.333 = 33.33 cu ft → 33.33 ÷ 27 = 1.23 cu yd</p>
              <p>With 10% waste: 1.23 × 1.10 = 1.36 cu yd → 80 lb bags: 1.36 ÷ 0.022 = <strong className="text-foreground">62 bags</strong></p>
            </div>
          </div>

          <div className="surface-card p-5 mb-4">
            <h4 className="font-bold text-foreground mb-2">Cylindrical Pours (Fence Posts, Sonotubes, Deck Piers)</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Volume (cu ft) = π × radius² × depth (all in feet)</p>
              <p className="mt-2"><strong className="text-foreground">Worked example</strong> — 10" diameter post hole at 36" depth:</p>
              <p>Radius = 5" = 0.417 ft | Depth = 36" = 3.0 ft</p>
              <p>Volume = 3.1416 × (0.417)² × 3.0 = 1.64 cu ft</p>
              <p>80 lb bags: 1.64 ÷ 0.60 = 2.73 → round up = <strong className="text-foreground">3 bags</strong> (with waste)</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3">Step 2 — Look Up Your Bag Yield</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bag yield is the volume of mixed concrete one bag produces after water is added. Yield is standardized per <a href="https://www.astm.org/c0387_c0387m-17.html" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">ASTM C387</a> and printed on every bag label.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-foreground">Bag Size</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Yield (cu ft)</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Yield (cu yd)</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Bags per Cu Yd</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">2025 Price</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">40 lb</td><td className="py-2.5 px-3">0.30</td><td className="py-2.5 px-3">0.011</td><td className="py-2.5 px-3">~90</td><td className="py-2.5 px-3">~$4.00</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">60 lb</td><td className="py-2.5 px-3">0.45</td><td className="py-2.5 px-3">0.017</td><td className="py-2.5 px-3">~60</td><td className="py-2.5 px-3">~$5.00</td></tr>
                <tr><td className="py-2.5 px-3">80 lb</td><td className="py-2.5 px-3">0.60</td><td className="py-2.5 px-3">0.022</td><td className="py-2.5 px-3">~45</td><td className="py-2.5 px-3">~$5.50</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-4">All yields per ASTM C387 Standard Specification for Packaged, Dry, Combined Materials for Concrete.</p>

          <h3 className="text-xl font-bold text-foreground mb-3">Step 3 — Apply the Bag Count Formula with 10% Waste</h3>
          <div className="surface-card p-5 mb-4">
            <p className="text-sm font-bold text-foreground mb-2">Formula</p>
            <p className="text-sm text-muted-foreground">Bags Needed = (Volume in cu ft ÷ Yield per bag) × 1.10</p>
            <p className="text-sm text-muted-foreground mt-2"><strong className="text-foreground">Worked example</strong> — 12 × 12 slab at 4" using 80 lb bags:</p>
            <p className="text-sm text-muted-foreground">Volume = 12 × 12 × 0.333 = 47.95 cu ft</p>
            <p className="text-sm text-muted-foreground">Raw bags = 47.95 ÷ 0.60 = 79.9</p>
            <p className="text-sm text-muted-foreground">With 10% waste = 79.9 × 1.10 = 87.9 → <strong className="text-foreground">order 88 bags</strong></p>
          </div>

          <div className="surface-card p-5 mb-4">
            <h4 className="font-bold text-foreground mb-2">ACI / ASTM Reference</h4>
            <p className="text-sm text-muted-foreground">
              ACI 302.1R-15 recommends a minimum 5% overage on all concrete pours to account for sub-grade irregularities, formwork leakage, and mixer residue. For bag pours where you cannot top up mid-job, 10% is the professional standard.
            </p>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
            <p className="text-sm font-bold text-accent mb-1">★ Pro Tip</p>
            <p className="text-sm text-muted-foreground">
              Always buy at least one bag beyond your calculated count. An extra 80 lb bag costs $5.50. Running short mid-pour creates a cold joint — a structural weakness that can require breaking out and re-pouring the entire slab.
            </p>
          </div>
        </motion.div>

        {/* 80 lb vs 60 lb vs 40 lb */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            80 lb vs 60 lb vs 40 lb Concrete Bags: Yield, Coverage and Cost Compared
          </h2>

          <h3 className="text-xl font-bold text-foreground mb-3">How Many 80 lb Bags of Concrete Per Cubic Yard?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            One cubic yard of concrete requires <strong className="text-foreground">45 bags of 80 lb concrete</strong>. Calculation: 27 cu ft ÷ 0.60 cu ft per bag = 45 bags exactly. The 80 lb bag delivers the lowest cost per cubic yard and is the standard choice for any pour above 10 bags.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>80 lb bag yield: 0.60 cu ft = 0.022 cu yd</li>
            <li>Bags per cubic yard: 45 (27 ÷ 0.60 = 45.0)</li>
            <li>Cost per cubic yard at $5.50: approximately $248</li>
            <li>Best for: slabs, driveways, footings, any pour above 0.25 cu yd</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">How Many 60 lb Bags Per Cubic Yard?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            One cubic yard requires <strong className="text-foreground">60 bags of 60 lb concrete</strong> (27 ÷ 0.45 = 60 bags). The 60 lb bag is the preferred choice for solo DIY pours — light enough to manage alone while still delivering reasonable yield.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>60 lb bag yield: 0.45 cu ft = 0.017 cu yd</li>
            <li>Bags per cubic yard: 60 (27 ÷ 0.45 = 60.0)</li>
            <li>Cost per cubic yard at $5.00: approximately $300</li>
            <li>Best for: solo pours, fence posts, mailbox bases, small repairs</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">How Many 40 lb Bags Per Cubic Foot?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            One 40 lb bag produces 0.30 cu ft, which means roughly 3.3 bags per cubic foot. This is the small-project bag for crack repairs, single post bases, and void fill. At 40 lbs it is the only size most users can manage without assistance.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>40 lb bag yield: 0.30 cu ft = 0.011 cu yd</li>
            <li>Bags per cubic yard: 90 (27 ÷ 0.30 = 90.0) — least efficient</li>
            <li>Cost per cubic yard at $4.00: approximately $360</li>
            <li>Best for: repairs, small post bases, one-bag projects, tight access areas</li>
          </ul>
        </motion.div>

        {/* Quikrete / Sakrete */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Quikrete and Sakrete Bag Calculator: Brand-Specific Yield and Mix Specs
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <a href="https://www.quikrete.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Quikrete</a> and <a href="https://www.sakrete.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Sakrete</a> are the two dominant bagged concrete brands in North America. Their standard 80 lb mixes have identical yields, but their specialty products differ in bag size, set time, and compressive strength.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-foreground">Brand / Product</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Bag Size</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Yield (cu ft)</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">PSI @ 28 Days</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Best Use</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">Quikrete Concrete Mix</td><td className="py-2.5 px-3">80 lb</td><td className="py-2.5 px-3">0.60</td><td className="py-2.5 px-3">4,000 PSI</td><td className="py-2.5 px-3">General slabs & footings</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">Quikrete Fast-Setting</td><td className="py-2.5 px-3">50 lb</td><td className="py-2.5 px-3">0.375</td><td className="py-2.5 px-3">4,000 PSI</td><td className="py-2.5 px-3">Fence posts, no mixing</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">Quikrete 5000 High-Strength</td><td className="py-2.5 px-3">80 lb</td><td className="py-2.5 px-3">0.60</td><td className="py-2.5 px-3">5,000 PSI</td><td className="py-2.5 px-3">Heavy-load slabs</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">Sakrete Concrete Mix</td><td className="py-2.5 px-3">80 lb</td><td className="py-2.5 px-3">0.60</td><td className="py-2.5 px-3">4,000 PSI</td><td className="py-2.5 px-3">General slabs & footings</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">Sakrete Fast-Setting</td><td className="py-2.5 px-3">80 lb</td><td className="py-2.5 px-3">0.60</td><td className="py-2.5 px-3">4,000 PSI</td><td className="py-2.5 px-3">Fence posts, piers</td></tr>
                <tr><td className="py-2.5 px-3">Sakrete 5000 Plus</td><td className="py-2.5 px-3">80 lb</td><td className="py-2.5 px-3">0.60</td><td className="py-2.5 px-3">5,000 PSI</td><td className="py-2.5 px-3">Structural & driveways</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-4">PSI values represent minimum 28-day compressive strength per ASTM C387 testing. Actual strength depends on correct water-cement ratio and proper curing.</p>

          <h3 className="text-xl font-bold text-foreground mb-3">How Much Water to Add Per Bag?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Water quantity directly controls the final strength of your concrete. Too much water increases workability but reduces compressive strength by up to 30%.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Quikrete 80 lb: add 3 quarts (2.8 litres) of water</li>
            <li>Quikrete 60 lb: add 2.5 quarts (2.4 litres) of water</li>
            <li>Quikrete 40 lb: add 1.5 quarts (1.4 litres) of water</li>
            <li>Sakrete 80 lb: add 3 quarts (2.8 litres) — same as Quikrete standard mix</li>
          </ul>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
            <p className="text-sm font-bold text-accent mb-1">★ Pro Tip</p>
            <p className="text-sm text-muted-foreground">
              Add 80% of the water first, mix for 2 minutes, then add the remaining 20% gradually until you reach a smooth, peanut-butter consistency. Never add extra water to improve workability. A slightly stiffer mix is harder to spread but produces significantly stronger concrete.
            </p>
          </div>
        </motion.div>

        {/* Project-by-Project Guide */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Project-by-Project Concrete Bag Guide: Slabs, Posts, Footings and More
          </h2>

          <h3 className="text-xl font-bold text-foreground mb-3">How Many Bags of Concrete for a Fence Post?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Fence post holes are the most common bag pour in residential construction. Bag count depends on hole diameter and depth, both determined by post size and local frost-line requirements.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-foreground">Hole Diameter</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Depth</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Volume (cu ft)</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">40 lb</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">60 lb</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">80 lb</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2 px-3">6" (4×4 post)</td><td className="py-2 px-3">24"</td><td className="py-2 px-3">0.39</td><td className="py-2 px-3">2</td><td className="py-2 px-3">1</td><td className="py-2 px-3">1</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">6" (4×4 post)</td><td className="py-2 px-3">30"</td><td className="py-2 px-3">0.49</td><td className="py-2 px-3">2</td><td className="py-2 px-3">2</td><td className="py-2 px-3">1</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">6" (4×4 post)</td><td className="py-2 px-3">42"</td><td className="py-2 px-3">0.68</td><td className="py-2 px-3">3</td><td className="py-2 px-3">2</td><td className="py-2 px-3">2</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">8" (4×4 post)</td><td className="py-2 px-3">30"</td><td className="py-2 px-3">0.87</td><td className="py-2 px-3">3</td><td className="py-2 px-3">2</td><td className="py-2 px-3">2</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">8" (4×4 post)</td><td className="py-2 px-3">42"</td><td className="py-2 px-3">1.22</td><td className="py-2 px-3">5</td><td className="py-2 px-3">3</td><td className="py-2 px-3">3</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">10" (6×6 post)</td><td className="py-2 px-3">36"</td><td className="py-2 px-3">1.63</td><td className="py-2 px-3">6</td><td className="py-2 px-3">4</td><td className="py-2 px-3">3</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">10" (6×6 post)</td><td className="py-2 px-3">48"</td><td className="py-2 px-3">2.18</td><td className="py-2 px-3">8</td><td className="py-2 px-3">6</td><td className="py-2 px-3">4</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">12" sonotube</td><td className="py-2 px-3">36"</td><td className="py-2 px-3">2.36</td><td className="py-2 px-3">9</td><td className="py-2 px-3">6</td><td className="py-2 px-3">5</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">12" sonotube</td><td className="py-2 px-3">48"</td><td className="py-2 px-3">3.14</td><td className="py-2 px-3">12</td><td className="py-2 px-3">8</td><td className="py-2 px-3">6</td></tr>
                <tr><td className="py-2 px-3">14" sonotube</td><td className="py-2 px-3">48"</td><td className="py-2 px-3">4.27</td><td className="py-2 px-3">16</td><td className="py-2 px-3">11</td><td className="py-2 px-3">8</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-4">All bag counts include 10% waste factor. Use Quikrete Fast-Setting (50 lb) for no-mix installations.</p>
        </motion.div>

        {/* Slab Bag Counts */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Concrete Bags for a 10×10, 12×12, 15×15 and 20×20 Slab
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The table below covers every common residential slab size at 4-inch and 6-inch depths with all three bag sizes. All counts include a 10% waste factor per ACI 302.1R. Use our <Link to="/tools/slab-calculator" className="text-accent font-bold hover:underline">Concrete Slab Calculator</Link> to generate precise figures for custom dimensions.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-foreground">Slab Size</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Depth</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Cu Yds</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">40 lb</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">60 lb</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">80 lb</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Cost (80 lb)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2 px-3">6 × 6 ft</td><td className="py-2 px-3">4"</td><td className="py-2 px-3">0.22</td><td className="py-2 px-3">22</td><td className="py-2 px-3">14</td><td className="py-2 px-3">10</td><td className="py-2 px-3">~$55</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">8 × 8 ft</td><td className="py-2 px-3">4"</td><td className="py-2 px-3">0.39</td><td className="py-2 px-3">39</td><td className="py-2 px-3">26</td><td className="py-2 px-3">18</td><td className="py-2 px-3">~$99</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">10 × 10 ft</td><td className="py-2 px-3">4"</td><td className="py-2 px-3">0.62</td><td className="py-2 px-3">62</td><td className="py-2 px-3">41</td><td className="py-2 px-3">31</td><td className="py-2 px-3">~$170</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">10 × 10 ft</td><td className="py-2 px-3">6"</td><td className="py-2 px-3">0.93</td><td className="py-2 px-3">93</td><td className="py-2 px-3">62</td><td className="py-2 px-3">47</td><td className="py-2 px-3">~$258</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">12 × 12 ft</td><td className="py-2 px-3">4"</td><td className="py-2 px-3">0.89</td><td className="py-2 px-3">89</td><td className="py-2 px-3">59</td><td className="py-2 px-3">44</td><td className="py-2 px-3">~$242</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">12 × 12 ft</td><td className="py-2 px-3">6"</td><td className="py-2 px-3">1.33</td><td className="py-2 px-3">133</td><td className="py-2 px-3">88</td><td className="py-2 px-3">67</td><td className="py-2 px-3">~$368</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">15 × 15 ft</td><td className="py-2 px-3">4"</td><td className="py-2 px-3">1.39</td><td className="py-2 px-3">139</td><td className="py-2 px-3">93</td><td className="py-2 px-3">70</td><td className="py-2 px-3">~$385</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">15 × 15 ft</td><td className="py-2 px-3">6"</td><td className="py-2 px-3">2.08</td><td className="py-2 px-3">208</td><td className="py-2 px-3">139</td><td className="py-2 px-3">104</td><td className="py-2 px-3">~$572</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">20 × 20 ft</td><td className="py-2 px-3">4"</td><td className="py-2 px-3">2.47</td><td className="py-2 px-3">247</td><td className="py-2 px-3">165</td><td className="py-2 px-3">124</td><td className="py-2 px-3">~$682</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">20 × 20 ft</td><td className="py-2 px-3">6"</td><td className="py-2 px-3">3.70</td><td className="py-2 px-3">370</td><td className="py-2 px-3">247</td><td className="py-2 px-3">185</td><td className="py-2 px-3">~$1,017</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">24 × 24 ft</td><td className="py-2 px-3">4"</td><td className="py-2 px-3">3.56</td><td className="py-2 px-3">356</td><td className="py-2 px-3">237</td><td className="py-2 px-3">178</td><td className="py-2 px-3">~$979</td></tr>
                <tr><td className="py-2 px-3">20 × 30 ft</td><td className="py-2 px-3">4"</td><td className="py-2 px-3">3.70</td><td className="py-2 px-3">370</td><td className="py-2 px-3">247</td><td className="py-2 px-3">185</td><td className="py-2 px-3">~$1,017</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-4">80 lb bag yield = 0.022 cu yd. 60 lb = 0.017 cu yd. 40 lb = 0.011 cu yd. All counts rounded up with 10% waste. Cost based on $5.50 per 80 lb bag (2025 national average).</p>
        </motion.div>

        {/* Sonotube & Footings */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Sonotubes, Footings and Other Common Projects
          </h2>

          <h3 className="text-xl font-bold text-foreground mb-3">Sonotube Bag Counts (Deck Piers and Columns)</h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>8-inch sonotube at 24-inch depth: 2 bags of 80 lb</li>
            <li>10-inch sonotube at 36-inch depth: 3 bags of 80 lb</li>
            <li>12-inch sonotube at 36-inch depth: 5 bags of 80 lb</li>
            <li>12-inch sonotube at 48-inch depth: 6 bags of 80 lb</li>
            <li>14-inch sonotube at 48-inch depth: 8 bags of 80 lb</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">Concrete Bags for Footings</h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Standard wall footing (16" wide × 8" thick × 10 ft run): 14 bags of 80 lb</li>
            <li>Deck beam footing (12" × 12" × 12" deep): 3 bags of 80 lb</li>
            <li>Gate post footing (14" × 14" × 24" deep): 6 bags of 80 lb</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">Other Common Small Projects</h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Mailbox post base (6" dia × 18" deep): 1 bag of 80 lb</li>
            <li>Basketball hoop ground sleeve: 2 bags of 80 lb</li>
            <li>Concrete step riser (36" wide, single step): 3 to 4 bags of 80 lb</li>
            <li>Retaining wall footing (12" wide × 8" thick × 8 ft run): 10 bags of 80 lb</li>
            <li>Driveway apron (6 × 4 ft × 4" deep): 5 bags of 80 lb</li>
          </ul>
        </motion.div>

        {/* Bags vs Ready-Mix */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Bagged Concrete vs. Ready-Mix: The Cost Breakeven Analysis
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-foreground">Volume</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Bags Needed</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Bag Cost</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Ready-Mix Cost</th>
                  <th className="text-left py-3 px-3 font-bold text-foreground">Best Choice</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">0.25 cu yd</td><td className="py-2.5 px-3">~12</td><td className="py-2.5 px-3">~$66</td><td className="py-2.5 px-3">~$150 min.</td><td className="py-2.5 px-3 font-bold text-foreground">Bags</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">0.50 cu yd</td><td className="py-2.5 px-3">~23</td><td className="py-2.5 px-3">~$126</td><td className="py-2.5 px-3">~$150 min.</td><td className="py-2.5 px-3 font-bold text-foreground">Bags</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">0.75 cu yd</td><td className="py-2.5 px-3">~34</td><td className="py-2.5 px-3">~$187</td><td className="py-2.5 px-3">~$150</td><td className="py-2.5 px-3 font-bold text-foreground">Even</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">1.00 cu yd</td><td className="py-2.5 px-3">~45</td><td className="py-2.5 px-3">~$248</td><td className="py-2.5 px-3">~$145–$165</td><td className="py-2.5 px-3 font-bold text-accent">Ready-mix</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 px-3">2.00 cu yd</td><td className="py-2.5 px-3">~90</td><td className="py-2.5 px-3">~$495</td><td className="py-2.5 px-3">~$290–$330</td><td className="py-2.5 px-3 font-bold text-accent">Ready-mix</td></tr>
                <tr><td className="py-2.5 px-3">5.00+ cu yd</td><td className="py-2.5 px-3">220+</td><td className="py-2.5 px-3">$1,200+</td><td className="py-2.5 px-3">~$725–$825</td><td className="py-2.5 px-3 font-bold text-accent">Always ready-mix</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-4">Ready-mix prices based on 2025 national average of $145–$165 per cubic yard delivered.</p>
        </motion.div>

        {/* How to Mix */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How to Mix Bagged Concrete: Water Ratio, Consistency and Temperature
          </h2>

          <h3 className="text-xl font-bold text-foreground mb-3">Hand Mixing vs. Drum Mixer</h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>1 to 4 bags per batch: hand mix in wheelbarrow — 3 to 5 minutes</li>
            <li>5 to 10 bags per batch: electric drum mixer rental (~$40/day)</li>
            <li>Above 10 bags: drum mixer in sequential batches</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">Mixing Steps</h3>
          <ol className="text-sm text-muted-foreground space-y-1 mb-4 list-decimal list-inside">
            <li>Add 80% of the specified water to the mixing container first</li>
            <li>Pour in the dry mix and begin mixing immediately</li>
            <li>Mix for 2 minutes until no dry pockets remain</li>
            <li>Add remaining 20% of water gradually and mix 1 more minute</li>
            <li>Check consistency — target is a firm, moldable paste</li>
            <li>Pour within 15 to 20 minutes of mixing</li>
          </ol>

          <h3 className="text-xl font-bold text-foreground mb-3">Temperature and Weather Effects</h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
            <li>Below 40°F (4°C): do not pour — hydration stops</li>
            <li>40°F to 50°F: use warm mixing water, cover with curing blankets</li>
            <li>50°F to 90°F: ideal range — follow standard water quantities</li>
            <li>Above 90°F (32°C): use cold water or ice, pour in early morning</li>
          </ul>

          <p className="text-xs text-muted-foreground">
            Reference: ACI 305R-16 (Hot Weather) and <a href="https://www.concrete.org/store/productdetail.aspx?ItemID=30616" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ACI 306R-16</a> (Cold Weather).
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions About Bagged Concrete
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How many bags of concrete do I need for a 10×10 slab?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For a standard 4-inch slab (10×10 ft) you need 33.33 cubic feet. At 80 lb bag yield (0.60 cu ft) that is 55.6 bags. Adding 10% waste brings the total to <strong className="text-foreground">62 bags of 80 lb</strong>. For 60 lb bags: 41 bags. For 40 lb bags: 82 bags. Use the <Link to="/tools/bag-calculator" className="text-accent font-bold hover:underline">Concrete Bag Calculator</Link> above for any dimension.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How many 80 lb bags of concrete make a yard?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">45 bags</strong> of 80 lb concrete equal one cubic yard. Each 80 lb bag produces 0.60 cu ft. One cubic yard = 27 cu ft. Therefore: 27 ÷ 0.60 = 45 bags exactly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How many bags of concrete do I need for a fence post?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A standard 4×4 post in a 6" diameter hole at 30" depth requires <strong className="text-foreground">2 bags of 80 lb</strong> concrete. A 6×6 post in a 10" hole at 36" depth requires 3 bags. See the post hole table above for all combinations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Is it cheaper to buy bags or order ready-mix?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bags are cheaper under 0.75 cu yd. Above 1 cu yd, ready-mix becomes cheaper — $248 in bags vs. $145–$165 delivered by truck. Above 3 cu yd, always order ready-mix.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How do you calculate how much concrete you need in bags?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Three steps: calculate your volume in cubic feet (L × W × D for slabs; π × radius² × depth for posts). Divide by the bag yield (0.60 for 80 lb, 0.45 for 60 lb, 0.30 for 40 lb). Multiply by 1.10 for 10% waste. Always round up to the nearest whole bag.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How much water do I add to an 80 lb bag?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Add 3 quarts (approximately 2.8 litres) of water. Add 80% first, mix 2 minutes, then add remaining 20%. Adding more water than specified reduces strength by approximately 500 PSI per extra quart.
              </p>
            </div>
          </div>
        </motion.div>

        {/* References */}
        <motion.div {...fadeUp}>
          <h2 className="text-xl font-bold text-foreground mb-4">References</h2>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li><a href="https://www.concrete.org/store/productdetail.aspx?ItemID=31819" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ACI 318-19</a>: Building Code Requirements for Structural Concrete</li>
            <li><a href="https://www.astm.org/c0387_c0387m-17.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ASTM C387</a>: Standard Specification for Packaged, Dry, Combined Materials</li>
            <li><a href="https://www.cement.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Portland Cement Association</a>: Design and Control of Concrete Mixtures, 15th Edition</li>
            <li><a href="https://www.quikrete.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Quikrete</a> Product Data Sheets — Quikrete Companies LLC</li>
            <li><a href="https://www.sakrete.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Sakrete</a> Product Data Sheets — Oldcastle APG</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link to="/" className="text-accent font-bold hover:underline">→ Concrete Material Calculator</Link>
            <Link to="/tools/slab-calculator" className="text-accent font-bold hover:underline">→ Slab Calculator</Link>
            <Link to="/tools" className="text-accent font-bold hover:underline">→ All Tools</Link>
            <Link to="/about" className="text-accent font-bold hover:underline">→ About Us</Link>
            <Link to="/contact" className="text-accent font-bold hover:underline">→ Contact</Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
