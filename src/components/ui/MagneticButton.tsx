import { useRef, useState, useEffect, type ReactNode, type AnchorHTMLAttributes } from "react";
import { motion } from "framer-motion";

// Anchor attributes minus the ones framer-motion redefines with different signatures
type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
>;

interface MagneticButtonProps extends AnchorProps {
  children: ReactNode;
  strength?: number; // how much the button follows the cursor (0..1)
}

// Hovering moves the button gently toward the cursor.
// Disabled on touch devices and when prefers-reduced-motion is set.
export const MagneticButton = ({
  children,
  strength = 0.25,
  ...rest
}: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (reduced || isTouch) setEnabled(false);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!enabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * strength, y: y * strength });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.4 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
};
