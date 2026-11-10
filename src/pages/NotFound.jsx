import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * NotFound (404) Page
 */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#092B22] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center gap-6"
      >
        <span className="font-serif text-[120px] font-black text-[#D9A441]/20 leading-none select-none">
          404
        </span>
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#F7F3E9] mb-2">
            Page Not Found
          </h1>
          <p className="text-[#EAE2D2]/60">
            Looks like this cup has already been eaten.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#D9A441] text-[#092B22] font-semibold px-7 py-3.5 rounded-full hover:bg-[#F7F3E9] transition-colors shadow-lg"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
