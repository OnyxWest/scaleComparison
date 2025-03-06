import React, { useState } from "react";

const scales: { [key: string]: string[] } = {
	"Major Pentatonic": ["C", "D", "E", "G", "A"],
	"Blues Scale": ["C", "D#", "F", "F#", "G", "A#"],
	Major: ["C", "D", "E", "F", "G", "A", "B"],
	"Natural Minor": ["C", "D", "D#", "F", "G", "G#", "A#"],
};

// function findCommonElements(
// 	arr1: Iterable<unknown> | null | undefined,
// 	arr2: Iterable<unknown> | null | undefined
// 	// arr3: Iterable<unknown> | null | undefined
// ) {
// 	const set1 = new Set(arr1);
// 	const set2 = new Set(arr2);
// 	const commonElements = [];

// 	if (!arr3) return [];
// 	for (const element of arr3) {
// 		if (set1.has(element) && set2.has(element)) {
// 			commonElements.push(element);
// 		}
// 	}

// 	return commonElements;
// }

export default function ScaleComparator() {
	const [scale1, setScale1] =
		useState<keyof typeof scales>("Major Pentatonic");
	const [scale2, setScale2] = useState<keyof typeof scales>("Blues Scale");
	// const [scale3, setScale3] = useState<keyof typeof scales>("Minor");

	const notes1 = scales[scale1];
	const notes2 = scales[scale2];
	// const commonNotes = findCommonElements(notes1, notes2, notes3);
	const commonNotes = notes1.filter((note) => notes2.includes(note));

	return (
		<div className="p-6 max-w-md mx-auto text-white flex flex-col items-center">
			<h1 className="text-xl font-bold mb-4">Scale Comparator</h1>

			<div className="flex flex-col gap-4">
				<label className="font-semibold">Select Scale 1:</label>
				<select
					className="border p-2 rounded bg-white text-black w-60"
					value={scale1}
					onChange={(e) => setScale1(e.target.value)}
				>
					{Object.keys(scales).map((scale) => (
						<option key={scale} value={scale}>
							{scale}
						</option>
					))}
				</select>

				<label className="font-semibold">Select Scale 2:</label>
				<select
					className="border p-2 rounded bg-white text-black w-60"
					value={scale2}
					onChange={(e) => setScale2(e.target.value)}
				>
					{Object.keys(scales).map((scale) => (
						<option key={scale} value={scale}>
							{scale}
						</option>
					))}
				</select>
				{/* <label className="font-semibold">Select Scale 3:</label>
				<select
					className="border p-2 rounded bg-white text-black"
					value={scale3}
					onChange={(e) => setScale3(e.target.value)}
				>
					{Object.keys(scales).map((scale) => (
						<option key={scale} value={scale}>
							{scale}
						</option>
					))}
				</select> */}
			</div>

			<div className="mt-4">
				<h2 className="text-lg font-semibold">Scale Notes:</h2>
				<div className="flex gap-2 mt-2">
					{notes1.map((note) => (
						<span
							key={note}
							className="px-2 py-1 bg-green-500 text-white rounded"
						>
							{note}
						</span>
					))}
				</div>
				<div className="flex gap-2 mt-2">
					{notes2.map((note) => (
						<span
							key={note}
							className="px-2 py-1 bg-red-500 text-white rounded"
						>
							{note}
						</span>
					))}
				</div>
				{/* <div className="flex gap-2 mt-2">
					{notes3?.map((note) => (
						<span
							key={note}
							className="px-2 py-1 bg-red-500 text-white rounded"
						>
							{note}
						</span>
					))}
				</div> */}
			</div>

			<div className="mt-4">
				<h2 className="text-lg font-semibold">Common Notes:</h2>
				<div className="flex gap-2 mt-2 ">
					{commonNotes.length > 0 ? (
						commonNotes.map((note) => (
							<span
								key={note}
								className="px-2 py-1 bg-blue-500 text-white rounded"
							>
								{note}
							</span>
						))
					) : (
						<span>No common notes</span>
					)}
				</div>
			</div>
		</div>
	);
}
