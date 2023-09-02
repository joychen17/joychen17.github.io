import React from "react";

function work_entry_1() {
	return {
		date: "Jan 2023 - present",
		title: "Sr. Software Engineer, Qualcomm",
		description:
			"Working in the Compiler Toolchain team of the Nuvia business unit. Supporting hardware team in gathering traces for performance measurements. Created visualization tool for viewing different addressing modes of new hardware registers.",
		keywords: [
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
		body: (
			<React.Fragment>
			</React.Fragment>
		),
	};
}

function work_entry_2() {
	return {
		date: "Oct 2019 - Dec 2022",
		title: "Sr. Software Engineer, Tenstorrent",
		description:
			"Spedup compilation time by 23x on large transformer networks for custom ML compiler by implementing compilation caching system. Created initial implementation of current runtime software to integrate software stack with PyTorch front-end. Co-led the exploration of training transformer models with dynamic runtime sparsity features. Implemented using PyTorch with three patents pending. Set up training flow using AWS and other cloud services. Work included entire process from training data tokenization, managing storage on cloud services through S3, tracking performance of models on W&B, fine-tuning on specific language tasks. Created a highly efficient graph library for custom ML compiler using C++with Python interface similar to networkx graph library using functional programming principles. Library adoption showed speedup of ~100x. Implemented generic serialization framework using boost::hana.",
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
			</React.Fragment>
		),
	};
}

function work_entry_3() {
	return {
		date: "Sep 2017 - Sep 2019",
		title: "PhD Student (not completed), University of Toronto",
		description:
			"",
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
			</React.Fragment>
		),
	};
}

function work_entry_4() {
	return {
		date: "Feb 2016 - May 2016",
		title: "Graduate Software Engineer Intern, Intel Corporation",
		description:
			"Created an analysis framework with the primary goal of determining hardware accelerable regions of code within a generic computer program. Further, the framework allows for exploration of hardware accelerator architectures, evaluation of accelerator platforms, and estimation of program speedup.",
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
			</React.Fragment>
		),
	};
}

function work_entry_5() {
	return {
		date: "Sep 2014 - Jul 2017",
		title: "Master's degree, Computer Engineering, University of Toronto",
		description:
			"My thesis project dealt with improving memory architecture for parallel hardware implemented on an FPGA through the High-Level Synthesis of multithreaded C. The associated conference paper is in the Publications section.",
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
			</React.Fragment>
		),
	};
}

function work_entry_6() {
	return {
		date: "May 2012 - Aug 2013",
		title: "ASIC Design and Verification Engineer Intern, AMD",
		description:
			"My role consisted primarily of taking full responsibility of running regression tests for ASIC design verification. This includes creating/maintaining test automation scripts, resource management, and coordinating regression runs. Aside from these responsibilities I was also exposed to ASIC design through simple debugging tasks. ",
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
			</React.Fragment>
		),
	};
}

function work_entry_7() {
	return {
		date: "Sep 2009 - Jun 2014",
		title: "Bachelor's degree, Engineering Science, University of Toronto",
		description:
			"Undergraduate thesis project: Improving the speed of automatically generated hardware from the LegUp High-Level Synthesis tool being developed at the University of Toronto, supervised by Prof. Jason H. Anderson. This was achieved through modifications of the Control Flow Graph of software programs in order to extract more instruction level parallelism",
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
			</React.Fragment>
		),
	};
}
const myArticles = [work_entry_1, work_entry_2, work_entry_3, work_entry_4, work_entry_5, work_entry_6, work_entry_7];

export default myArticles;
