import { motion } from 'framer-motion';

export function DetailedContent() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-foreground tracking-tight mb-6">
            What is a Concrete Calculator?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A concrete calculator is an essential tool for construction professionals, contractors, and DIY enthusiasts. It helps you estimate the exact quantity of cement, sand, and coarse aggregate (gravel) needed for any concrete project — from small residential foundations to large commercial structures.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our calculator uses the standard volumetric method recommended by civil engineering guidelines. By entering the dimensions of your concrete work and selecting the appropriate mix grade, you get an accurate breakdown of all materials required, eliminating guesswork and reducing waste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Understanding Concrete Mix Grades
          </h2>
          <div className="surface-card p-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Concrete grades indicate the compressive strength and mix proportions. The "M" stands for Mix and the number represents the compressive strength in MPa after 28 days of curing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { grade: 'M5 – M7.5', use: 'Non-structural works like lean concrete, leveling courses, and flooring base.' },
                { grade: 'M10 – M15', use: 'Plain cement concrete works, foundations for light structures, boundary walls.' },
                { grade: 'M20', use: 'Most common grade. Used for slabs, beams, columns, footings in residential construction.' },
                { grade: 'M25', use: 'High-strength applications like RCC structures, multi-story buildings, heavy load-bearing elements.' },
              ].map((item) => (
                <div key={item.grade} className="p-4 bg-secondary rounded-xl border border-border">
                  <p className="font-bold text-foreground">{item.grade}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The Calculation Formula
          </h2>
          <div className="surface-card p-6 space-y-3 text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Step 1:</strong> Calculate the <strong className="text-foreground">Concrete Volume</strong> = Length × Width × Depth</p>
            <p><strong className="text-foreground">Step 2:</strong> Calculate the <strong className="text-foreground">Wet Volume of Mix</strong> = Concrete Volume × (1 + Wastage%/100). The standard wastage factor is 52.4%, which accounts for bulking of sand, voids, and mixing losses.</p>
            <p><strong className="text-foreground">Step 3:</strong> Determine individual material volumes using the mix ratio. For M20 (1:1.5:3), the sum of ratios = 5.5</p>
            <p className="pl-4 border-l-2 border-accent">
              Cement Volume = (1/5.5) × Wet Volume<br />
              Sand Volume = (1.5/5.5) × Wet Volume<br />
              Aggregate Volume = (3/5.5) × Wet Volume
            </p>
            <p><strong className="text-foreground">Step 4:</strong> Convert to weight using densities — Cement: 1 bag = 0.035 m³ = 50 kg, Sand: 1550 kg/m³, Aggregate: 1350 kg/m³</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why Use Our Calculator?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🎯', title: 'Accurate Results', desc: 'Uses government-standard formulas and material densities for precise calculations.' },
              { icon: '💰', title: 'Cost Estimation', desc: 'Add material prices to get an instant budget estimate for your project.' },
              { icon: '📊', title: 'Detailed Breakdown', desc: 'Step-by-step calculation logic shown so you can verify every number.' },
            ].map((f) => (
              <div key={f.title} className="surface-card p-6 text-center">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="font-bold text-foreground mt-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'What is the 52.4% wastage factor?', a: 'The 52.4% increase converts dry volume to wet volume of mix. This accounts for voids between dry materials, bulking of sand when wet, and losses during mixing and transportation. This is a standard factor used in civil engineering calculations.' },
              { q: 'How many bags of cement in 1 cubic meter?', a: 'It depends on the concrete grade. For M20 grade (1:1.5:3), you need approximately 8.22 bags of cement per cubic meter of concrete (considering 52.4% wastage factor).' },
              { q: 'What is the strongest concrete grade available?', a: 'In our calculator, M25 is the strongest grade. However, in practice, concrete grades go much higher (M30, M40, M60+) for specialized structural applications. These higher grades require admixtures and are typically batched at ready-mix plants.' },
              { q: 'Can I use this for circular or irregular shapes?', a: 'This calculator works for rectangular/slab-shaped concrete pours. For circular columns or irregular shapes, calculate the volume separately (πr²h for cylinders) and use the material ratio calculations from our results.' },
            ].map((faq) => (
              <div key={faq.q} className="surface-card p-5">
                <h3 className="font-bold text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
