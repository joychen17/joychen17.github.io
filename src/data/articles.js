import React from "react";

function article_1() {
	return {
		date: "March 2021",
		title: "Compute Substrate for Software 2.0",
		description:
			"The rapidly growing compute demands of AI necessitate the creation of new computing architectures and approaches. Tenstorrent designed its architecture (embodied in Grayskull and Wormhole devices) to tackle this challenge via two fundamental and synergistic approaches. The first is via compute-on-packets fabric that is built from ground up for massive scaleout. The second is the ability to execute dynamic computation, built into the compiler, runtime software and hardware architecture. By combining these approaches, TensTorrent will enable continued scaling of AI workloads.",
		keywords: [
			"computing",
			"AI",
			"Tenstorrent",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		article_link: "https://ieeexplore.ieee.org/abstract/document/9373921",
		body: (
			<React.Fragment>
				<div className="article-content">
					{/* <div className="paragraph">Content of article 1</div> */}
					<a href="https://ieeexplore.ieee.org/abstract/document/9373921">Visit IEEEXplore for the full article.</a> 
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "4 September 2017",
		title: "Automated generation of banked memory architectures in the high-level synthesis of multi-threaded software",
		description:
			"Some modern high-level synthesis (HLS) tools permit the synthesis of multi-threaded software into parallel hardware, where concurrent software threads are realized as concurrently operating hardware units. A common performance bottleneck in any parallel implementation (whether it be hardware or software) is memory bandwidth — parallel threads demand concurrent access to memory resulting in contention which hurts performance. FPGAs contain an abundance of independently accessible memories offering high internal memory bandwidth. We describe an approach for leveraging such bandwidth in the context of synthesizing parallel software into hardware. Our approach applies trace-based profiling to determine how a program's arrays should be automatically partitioned into sub-arrays, which are then implemented in separate on-chip RAM blocks within the target FPGA. The partitioning is accomplished in a way that requires a single HLS execution and logic simulation for trace extraction. The end result is that each thread, when implemented in hardware, has exclusive access to its own memories to the extent possible, significantly reducing contention and arbitration and thus raising performance.",
		style: ``,
		keywords: [
			"high-level synthesis",
			"memory architecture",
			"multi-threaded hls",
			"FPGA",
		],
		article_link: "https://ieeexplore.ieee.org/abstract/document/8056841",
		body: (
			<React.Fragment>
				<a href="https://ieeexplore.ieee.org/abstract/document/8056841">Visit IEEEXplore for the full article.</a> 
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "October 2016",
		title: "A Survey and Evaluation of FPGA High-Level Synthesis Tools",
		description:
			"High-level synthesis (HLS) is increasingly popular for the design of high-performance and energy-efficient heterogeneous systems, shortening time-to-market and addressing today’s system complexity. HLS allows designers to work at a higher-level of abstraction by using a software program to specify the hardware functionality. Additionally, HLS is particularly interesting for designing field-programmable gate array circuits, where hardware implementations can be easily refined and replaced in the target device. Recent years have seen much activity in the HLS research community, with a plethora of HLS tool offerings, from both industry and academia. All these tools may have different input languages, perform different internal optimizations, and produce results of different quality, even for the very same input description. Hence, it is challenging to compare their performance and understand which is the best for the hardware to be implemented. We present a comprehensive analysis of recent HLS tools, as well as overview the areas of active interest in the HLS research community. We also present a first-published methodology to evaluate different HLS tools. We use our methodology to compare one commercial and three academic tools on a common set of C benchmarks, aiming at performing an in-depth evaluation in terms of performance and the use of resources.",
		style: ``,
		keywords: [
			"FPGA",
			"high-level synthesis",
		],
		article_link: "https://ieeexplore.ieee.org/abstract/document/7368920",
		body: (
			<React.Fragment>
				<a href="https://ieeexplore.ieee.org/abstract/document/7368920">Visit IEEEXplore for the full article.</a> 
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "18 June 2016",
		title: "LegUp High-Level Synthesis",
		description:
			"LegUp is a High-level Synthesis tool under active development at the University of Toronto since 2011. The tool is on its fourth public release, is open source and freely downloadable. LegUp has been the subject of over 15 publications and has been downloaded by over 1500 groups from around the world. In this section, we overview LegUp, its programming model, unique aspects of the tool versus other HLS offerings, and conclude with a case study.",
		style: ``,
		keywords: [
			"high-level synthesis",
			"hardware accelerator",
		],
		article_link: "https://link.springer.com/chapter/10.1007/978-3-319-26408-0_10",
		body: (
			<React.Fragment>
				This was a chapter of a book published by Springer called "FPGAs for Software Programmers"
				<a href="https://link.springer.com/chapter/10.1007/978-3-319-26408-0_10">Visit Springer for the full article.</a> 
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "20 November 2014",
		title: "Automating the Design of Processor/Accelerator Embedded Systems with LegUp High-Level Synthesis",
		description:
			"LegUp is an open-source high-level synthesis (HLS) tool that accepts a C program as input and automatically synthesizes it into a hybrid system. The hybrid system comprises an embedded processor and custom accelerators that realize user-designated compute-intensive parts of the program with improved throughput and energy efficiency. In this paper, we overview the LegUp framework and describe several recent developments: 1) support for an embedded ARM processor, as is available on Altera's recently released SoC FPGA, 2) HLS support for software parallelization schemes -- pthreads and OpenMP, 3) enhancements to LegUp's core HLS algorithms that raise the quality of the auto-generated hardware, and, 4) a preliminary debugging and verification framework providing C source-level debugging of HLS hardware. Since its first release in 2011, LegUp has been downloaded over 1000 times by groups around the world, providing a powerful platform for new research in high-level synthesis algorithms and embedded systems design.",
		style: ``,
		keywords: [
			"high-level synthesis",
			"FPGA",
			"hardware accelerator",
			"embedded system",
		],
		article_link: "https://ieeexplore.ieee.org/abstract/document/6962276",
		body: (
			<React.Fragment>
				<a href="https://ieeexplore.ieee.org/abstract/document/6962276">Visit IEEEXplore for the full article.</a> 
			</React.Fragment>
		),
	};
}

// function article_3() {
// 	return {
// 		date: "",
// 		title: "",
// 		description:
// 			"",
// 		style: ``,
// 		keywords: [
// 			"",
// 			"",
// 			"",
// 			"",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<a href="">Visit IEEEXplore for the full article.</a> 
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1, article_2, article_3, article_4, article_5];

export default myArticles;
