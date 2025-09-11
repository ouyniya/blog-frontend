"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface LockIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface LockIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const LockIcon = forwardRef<LockIconHandle, LockIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const reduced = useReducedMotion();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () =>
					reduced ? controls.start("normal") : controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(
			(e?: React.MouseEvent<HTMLDivElement>) => {
				if (reduced) return;
				if (!isControlled.current) controls.start("animate");
				else onMouseEnter?.(e as any);
			},
			[controls, reduced, onMouseEnter],
		);

		const handleLeave = useCallback(
			(e: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlled.current) {
					controls.start("normal");
				} else {
					onMouseLeave?.(e as any);
				}
			},
			[controls, onMouseLeave],
		);

		const lockVariants: Variants = {
			normal: { x: 0, rotate: 0 },
			animate: {
				x: [0, -3, 3, -3, 3, 0],
				rotate: [0, -2, 2, -2, 2, 0],
				transition: { duration: 0.4 },
			},
		};

		return (
			<motion.div
				className={cn("inline-flex items-center justify-center", className)}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
				{...props}
			>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={lockVariants}
					animate={controls}
					initial="normal"
				>
					<motion.rect
						width="18"
						height="11"
						x="3"
						y="11"
						rx="2"
						ry="2"
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="M7 11V7a5 5 0 0 1 10 0v4"
						initial="normal"
						animate={controls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

LockIcon.displayName = "LockIcon";
export { LockIcon };
