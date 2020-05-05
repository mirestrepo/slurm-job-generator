(this["webpackJsonpslurm-job-generator"]=this["webpackJsonpslurm-job-generator"]||[]).push([[0],{11:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(4),i=t.n(c),r=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h1",null,"saliksik slurm job generator"),l.a.createElement("div",{className:"externalSites"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://asti.dost.gov.ph/coare/servicedesk/pages/UI.php"},"User Portal")),"|",l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/coare.project"},"Facebook")),"|",l.a.createElement("li",null,l.a.createElement("a",{href:"https://slurm.schedmd.com/documentation.html"},"Slurm"))))),l.a.createElement("hr",null),l.a.createElement("p",null,"A Slurm job script generator configured for the COARE facility's compute cluster, saliksik"))},s=t(2),m=t(5),o=t(6),u=t(7),d=t(1),h=t(10),b=t(9);var p=function(e){return l.a.createElement("div",{className:"jobContainer jobForm "+e.hidden},l.a.createElement("div",null,l.a.createElement("div",{className:"configTitle"},l.a.createElement("h3",null,"SBATCH Configuration"),l.a.createElement("button",{className:"btn viewBtn",onClick:e.changeView},"Load Modules")),l.a.createElement("label",{htmlFor:"partition",className:"inputLabel"},"Partition"),l.a.createElement("div",{className:"buttonGrp"},l.a.createElement("button",{name:"debug",className:"btn",onClick:e.handlePartitionClick},"Debug"),l.a.createElement("button",{name:"batch",className:"btn",onClick:e.handlePartitionClick},"Batch"),l.a.createElement("button",{name:"serial",className:"btn",onClick:e.handlePartitionClick},"Serial"),l.a.createElement("button",{name:"gpu",className:"btn",onClick:e.handlePartitionClick},"GPU"))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"jobName",className:"inputLabel"},"Job name"),l.a.createElement("input",{type:"text",name:"jobName",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email",className:"inputLabel"},"Job Alert Email"),l.a.createElement("input",{type:"text",name:"email",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"emailEvent",className:"inputLabel"},"Email Event"),l.a.createElement("div",{className:"buttonGrp"},l.a.createElement("button",{name:"begin",className:"btn",onClick:e.handleEmailClick},"Begin"),l.a.createElement("button",{name:"end",className:"btn",onClick:e.handleEmailClick},"End"),l.a.createElement("button",{name:"requeue",className:"btn",onClick:e.handleEmailClick},"Requeue"),l.a.createElement("button",{name:"fail",className:"btn",onClick:e.handleEmailClick},"Fail"),l.a.createElement("button",{name:"all",className:"btn",onClick:e.handleEmailClick},"All"))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"requeue"},"Requeue"),l.a.createElement("button",{name:"requeue",className:"checkbox",onClick:e.handleCheckClick},e.check)),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"nodes",className:"inputLabel"},"Number of nodes"),l.a.createElement("input",{type:"text",name:"nodes",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"ntasksNode",className:"inputLabel"},"Processes per node"),l.a.createElement("input",{type:"text",name:"ntasksNode",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"ntasks",className:"inputLabel"},"Total Processes (across all nodes)"),l.a.createElement("input",{type:"text",name:"ntasks",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"memory",className:"inputLabel"},"RAM per node (default: MB)"),l.a.createElement("div",{className:"memBtn"},l.a.createElement("input",{type:"text",name:"memory",onChange:e.onChange}),l.a.createElement("button",{className:"btn",onClick:e.handleGigClick},"GB"))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"output",className:"inputLabel"},"Standard Output File"),l.a.createElement("input",{type:"text",name:"output",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"error",className:"inputLabel"},"Standard Error File"),l.a.createElement("input",{type:"text",name:"error",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"nodelist",className:"inputLabel"},"Specific Node to Run"),l.a.createElement("input",{type:"text",name:"nodelist",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"gpu",className:"inputLabel"},"Number of GPU devices"),l.a.createElement("input",{type:"text",name:"gpu",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"jobArray",className:"inputLabel"},"Job Array"),l.a.createElement("input",{type:"text",name:"jobArray",onChange:e.onChange})))};var E=function(e){return l.a.createElement("pre",null,"#SBATCH ",e.prefix,e.value)};var g=function(e){return l.a.createElement("pre",null,"module load ",e.value)};var k=function(e){var a={jobName:"--job-name=",nodes:"--nodes=",ntasks:"--ntasks=",ntasksNode:"--ntasks-per-node=",partition:"--partition=",qos:"--qos=",memory:"--mem=",output:"--output=",error:"--error=",email:"--mail-user=",emailEvent:"--mail-type=",nodelist:"--nodelist=",jobArray:"--array=",gpu:"--gres=gpu:",requeue:"--requeue"},t=e.job,n=Object.keys(t).map((function(e,n){var c=t[e];return"isSbatch"===e||"modules"===e?null:"emailEvent"===e&&c.length?l.a.createElement(E,{key:n,prefix:a[e],value:c.join(",").toUpperCase()}):"requeue"===e&&!0===c?l.a.createElement(E,{key:n,prefix:a[e]}):c.length?l.a.createElement(E,{key:n,prefix:a[e],value:c}):null})),c=t.modules.map((function(e,a){return l.a.createElement(g,{key:a,value:e})}));return l.a.createElement("div",{className:"jobContainer jobScript"},l.a.createElement("div",{className:"titleBar"},l.a.createElement("p",null,"gian-thinkpad")),l.a.createElement("div",{className:"helpBar"},l.a.createElement("p",null,"File")),l.a.createElement("pre",null,"#!/bin/bash"),n,l.a.createElement("br",null),c)},v=t(8),f=t.n(v);function C(e){return l.a.createElement("button",{name:e.module,className:"btn",onClick:e.addModulefiles},e.module)}function N(e){var a=f.a.cpuModules.map((function(a,t){var n=a;return l.a.createElement(C,{key:t,module:n,addModulefiles:e.addModulefiles})}));return l.a.createElement("div",{className:"jobContainer jobForm "+e.hidden},l.a.createElement("div",{className:"configTitle"},l.a.createElement("h3",null,"Module Environments"),l.a.createElement("button",{className:"btn viewBtn",onClick:e.changeView},"SBATCH Config")),a)}var y=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={partition:"",qos:"",jobName:"",email:"",emailEvent:[],isSbatch:!0,modules:[]},n.check="\xa0",n.sbatchHide="",n.moduleHide="hidden",n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handlePartitionClick=n.handlePartitionClick.bind(Object(d.a)(n)),n.handleGigClick=n.handleGigClick.bind(Object(d.a)(n)),n.handleEmailClick=n.handleEmailClick.bind(Object(d.a)(n)),n.handleCheckClick=n.handleCheckClick.bind(Object(d.a)(n)),n.addModulefiles=n.addModulefiles.bind(Object(d.a)(n)),n.changeView=n.changeView.bind(Object(d.a)(n)),n}return Object(u.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;console.log(t,n),this.setState(Object(m.a)({},t,n))}},{key:"handleClickActive",value:function(e){var a,t=this.inputEl.current.children,n=Object(s.a)(t);try{for(n.s();!(a=n.n()).done;){a.value.className="btn"}}catch(l){n.e(l)}finally{n.f()}e.target.className+=" btnActive"}},{key:"handleGigClick",value:function(e){var a=this.state.memory.slice(),t="btn";if(!a)return null;a.includes("G")?a=a.slice(0,-1):(a+="G",t+=" btnActive"),e.target.className=t,this.setState({memory:a})}},{key:"handlePartitionClick",value:function(e){var a,t,n=e.target,l=n.name,c=n.parentElement.children,i=Object(s.a)(c);try{for(i.s();!(a=i.n()).done;){a.value.className="btn"}}catch(r){i.e(r)}finally{i.f()}if(this.state.partition&&this.state.partition===l)return this.setState({partition:"",qos:""});switch(e.target.className+=" btnActive",l){case"debug":t="240c-1h_debug";break;case"batch":t="240c-1h_batch";break;case"gpu":t="12c-1h_2gpu";break;case"serial":t="84c-1d_serial"}this.setState({partition:l,qos:t})}},{key:"handleEmailClick",value:function(e){var a,t=e.target,n=t.name,l=t.parentElement,c=this.state.emailEvent,i=l.children;if("all"!==n||c.includes(n))if("all"===n){a=c.slice(c.length);var r,m=Object(s.a)(i);try{for(m.s();!(r=m.n()).done;){r.value.className="btn"}}catch(d){m.e(d)}finally{m.f()}}else c.includes("all")?a=c.slice():c.includes(n)?(a=c.slice().filter((function(e){return e!==n})),e.target.className="btn"):(a=c.slice().concat(n),e.target.className="btn btnActive");else{a=c.slice(c.length).concat(n);var o,u=Object(s.a)(i);try{for(u.s();!(o=u.n()).done;){o.value.className="btn btnActive"}}catch(d){u.e(d)}finally{u.f()}}this.setState({emailEvent:a})}},{key:"handleCheckClick",value:function(e){this.state.requeue?(e.target.className="checkbox",this.setState({requeue:!1}),this.check="\xa0"):(this.setState({requeue:!0}),e.target.className="checkbox btnActive",this.check="\u2713")}},{key:"addModulefiles",value:function(e){var a=e.target.name,t=this.state.modules.slice();t.includes(a)?(t=t.filter((function(e){return e!==a})),e.target.className="btn",this.setState({modules:t})):(e.target.className="btn btnActive",this.setState({modules:t.concat(a)}))}},{key:"changeView",value:function(){var e=this.state.isSbatch;this.setState({isSbatch:!e}),e?(this.moduleHide="",this.sbatchHide="hidden"):(this.moduleHide="hidden",this.sbatchHide="")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Job Settings"),l.a.createElement("div",{className:"jobWrapper"},l.a.createElement(p,{onChange:this.handleChange,handlePartitionClick:this.handlePartitionClick,handleGigClick:this.handleGigClick,handleEmailClick:this.handleEmailClick,handleEmailAllClick:this.handleEmailAllClick,handleCheckClick:this.handleCheckClick,check:this.check,changeView:this.changeView,hidden:this.sbatchHide}),l.a.createElement(N,{changeView:this.changeView,addModulefiles:this.addModulefiles,hidden:this.moduleHide}),l.a.createElement(k,{className:"hidden",job:this.state})))}}]),t}(l.a.Component);t(16);var j=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(r,null),l.a.createElement(y,null))};i.a.render(l.a.createElement(j,null),document.getElementById("root"))},8:function(e,a){a.cpuModules=["anaconda/2-5.3.1","anaconda/3-5.3.1","autodock/4.2.6_openmpi-4.0.3","bcftools/1.10.2","binutils/2.34","bwa/0.7.17","bzip2/1.0.8_gcc-8.4.0","cmake/3.17.0.rc3_gcc-8.4.0","curl/7.69.1","curl/7.69.1_gcc-8.4.0","fast-tk/0.0.13","fastp/0.20.0","fftw/3.3.8","gawk/5.0.1","gcc/8.4.0","gettext/0.20","gmp/6.2.0","gnuplot/5.2.4","gromacs/2020.1_openmpi-4.0.3","hdf5/1.12.0","hdf5/1.12.0_openmpi-4.0.2","hpl/2.3","isl/0.14","isl/0.18","jasper/2.0.16","java/1.8.0","jmodeltest/2.1.10","libjpeg/2.0.4","libpng/1.6.37","libtiff/4.1.0","lzip/1.21","mafft/7.453.0","make/4.3","matlab/R2019a","mdtraj/1.9.3","mpc/1.1.0","mpfr/4.0.2","mpich/3.3.2","namd/2.13.0","nco/4.6.1","netcdf-fortran/4.5.2","netcdf/4.7.3","netcdf/4.7.4_openmpi-4.0.2","nodejs/10.0.0","nwchem/7.0.0","nwchem/7.0.0_singularity","openmpi/4.0.2","openmpi/4.0.3_gcc-8.4.0","paml/4.9.0","perl/5.30.2","phyml/3.3.2019","picard/2.22.1","prank/17.04.27","python/3.8.2","qe/6.4.1p_openmpi-4.0.3","qe/6.5_openmpi-4.0.3","raxml/8.2.12","regcm/4.7.0","regcm/4.7.0_bats","regcm/4.7.0_clm","regcm/4.7.0_clm-4.5","ruby/2.7.0","samtools/1.10","scilab/6.1.0","singularity/rstudio-server-1.2.5033","spades/3.14.0","sqlite/3.31.1","sra_tools/2.10.5","texinfo/6.3","vcftools/0.1.6","vmd/1.9.3","wgrib/1.8.0","wgrib/2.0.7","wgrib/2.0.8","wtbg/2.5.0","xz/5.2.4_gcc-8.4.0","zlib/1.2.11_gcc-8.4.0"]}},[[11,1,2]]]);
//# sourceMappingURL=main.ef288f93.chunk.js.map