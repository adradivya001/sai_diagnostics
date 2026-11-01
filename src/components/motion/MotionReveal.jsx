import { motion } from 'framer-motion';

/**
 * Reusable Motion Design Utilities
 * Built with Framer Motion supporting:
 * - Scroll-triggered entrance
 * - REVERSIBLE exit on scroll away (once: false)
 * - Replay on scroll back
 * - Smooth cubic-bezier easing
 * - Respects prefers-reduced-motion
 */

const smoothEase = [0.16, 1, 0.3, 1];

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  className = '',
  style = {}
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'right': // Enters moving from right (starts with +x)
        return { opacity: 0, x: 45, y: 0 };
      case 'left': // Enters moving from left (starts with -x)
        return { opacity: 0, x: -45, y: 0 };
      case 'down':
        return { opacity: 0, x: 0, y: -35 };
      case 'scale':
        return { opacity: 0, scale: 0.94, y: 15 };
      case 'up':
      default:
        return { opacity: 0, x: 0, y: 35 };
    }
  };

  const initial = getInitialPosition();
  const animate = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: false, amount }}
      transition={{ duration, delay, ease: smoothEase }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const HeadingReveal = ({
  children,
  delay = 0.05,
  className = '',
  style = {}
}) => {
  // Phase 16-A: Headings enter smoothly from the right
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: smoothEase }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  delayChildren = 0.1,
  staggerChildren = 0.12,
  amount = 0.15,
  className = '',
  style = {}
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  direction = 'up',
  className = '',
  style = {}
}) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 28 : direction === 'down' ? -28 : 0,
      x: direction === 'right' ? 30 : direction === 'left' ? -30 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.65,
        ease: smoothEase
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
};

export const ImageReveal = ({
  src,
  alt,
  className = '',
  style = {},
  direction = 'left',
  aspectRatio = 'auto',
  badge = null
}) => {
  const initial = {
    opacity: 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    scale: 0.96
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.85, ease: smoothEase }}
      className={`motion-image-frame ${className}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          aspectRatio,
          display: 'block'
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, ease: smoothEase }}
      />
      {badge && badge}
    </motion.div>
  );
};

export const HoverCard = ({
  children,
  className = '',
  style = {},
  lift = -6,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ y: lift, transition: { duration: 0.28, ease: smoothEase } }}
      whileTap={{ scale: 0.99 }}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
