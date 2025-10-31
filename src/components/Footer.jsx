import React from "react";

export default function Footer() {
	return (
		<footer className="bg-amber-200 border-t mt-12">
			<div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
				© {new Date().getFullYear()} JC Dev — Hecho con React
			</div>
		</footer>
	);
}
