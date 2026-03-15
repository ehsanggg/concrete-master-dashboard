import { motion } from 'framer-motion';
import step1Img from '@/assets/how-to-step1.png';
import step2Img from '@/assets/how-to-step2.png';
import step3Img from '@/assets/how-to-step3.png';

const steps = [
  {
    number: '01',
    title: 'Measure Your Area',
    description: 'Enter the length, width, and depth (thickness) of the concrete area you need to fill. You can switch between metric (meters/centimeters) and imperial (feet/inches) units depending on your preference.',
    image: step1Img,
  },
  {
    number: '02',
    title: 'Select Concrete Grade',
    description: 'Choose the appropriate concrete mix grade (M5 to M25) based on your project requirements. Each grade has a specific cement:sand:aggregate ratio that determines the strength and durability of the concrete.',
    image: step2Img,
  },
  {
    number: '03',
    title: 'Get Instant Results',
    description: 'Click "Calculate" to instantly see the total volume, number of cement bags, sand and aggregate quantities in kg and tons. You can also add material prices to get a cost estimate for your project.',
    image: step3Img,
  },
];

export function HowToUse() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-foreground tracking-tight">
            How to Use This Calculator
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Get accurate concrete material estimates in just 3 simple steps. No engineering degree required.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
            >
              <div className="flex-1 space-y-4">
                <span className="inline-block text-5xl font-black text-accent/20">{step.number}</span>
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="surface-card p-4 max-w-sm">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-xl w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
