/*Copyright (c) 2013-2016, Rob Schmuecker
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* The name Rob Schmuecker may not be used to endorse or promote products
  derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/


// Get JSON data
treeJSON = d3.json("../data/flare.json", function(error, treeData) {

    treeData = {"id": "E0:Murola", "name": "E0:Murola", "tf": "", "children": [{"id": "E3.5:ICM", "name": "E3.5:ICM", "tf": "", "children": [{"id": "E4.5:Epiblast", "name": "E4.5:Epiblast", "tf": "", "children": [{"id": "E5.5:Epiblast", "name": "E5.5:Epiblast", "tf": "", "children": [{"id": "E6.5:Epiblast", "name": "E6.5:Epiblast", "tf": "Utf1, Pou3f1, Mycn", "children": [{"id": "E6.75:Epiblast", "name": "E6.75:Epiblast", "tf": "", "children": [{"id": "E7:Epiblast", "name": "E7:Epiblast", "tf": "", "children": [{"id": "E7.25:Epiblast", "name": "E7.25:Epiblast", "tf": "", "children": [{"id": "E7.5:Epiblast", "name": "E7.5:Epiblast", "tf": "Utf1, Pou3f1, Otx2"}, {"id": "E7.5:Neuroectoderm", "name": "E7.5:Neuroectoderm", "tf": "Cited2, Irx3, Foxb1, Sp5, Id2", "children": [{"id": "E7.75:Neuroectoderm", "name": "E7.75:Neuroectoderm", "tf": "", "children": [{"id": "E8:Neuroectoderm", "name": "E8:Neuroectoderm", "tf": "", "children": [{"id": "E8.25:Forebrain/Midbrain/Hindbrain", "name": "E8.25:Forebrain/Midbrain/Hindbrain", "tf": "En1, Irx3, Irx5, Cited2, Sox21, Foxb1", "children": [{"id": "E8.5:Forebrain/Midbrain/Hindbrain", "name": "E8.5:Forebrain/Midbrain/Hindbrain", "tf": "", "children": [{"id": "E9.5:Forebrain/Midbrain/Hindbrain", "name": "E9.5:Forebrain/Midbrain/Hindbrain", "tf": "Pax5, Pax8, En2, En1, Mllt3, Pax7, Trps1, Pax3, Pou3f3, Zfhx3, Hdac9, Lmx1b, Nfia, Klf3, Rai14, Pknox2, Sox13, Nrip1, Kdm2b, Nfib", "children": [{"id": "E10.5:Forebrain/Midbrain/Hindbrain", "name": "E10.5:Forebrain/Midbrain/Hindbrain", "tf": "", "children": [{"id": "E11.5:Forebrain/Midbrain/Hindbrain", "name": "E11.5:Forebrain/Midbrain/Hindbrain", "tf": ""}]}]}, {"id": "E9.5:Isthmic organizer cells", "name": "E9.5:Isthmic organizer cells", "tf": "Dmbx1, Otx2, Irx5, Zeb2, Irx3, Otx1, Zbtb16, Thrb", "children": [{"id": "E10.5:Isthmic organizer cells", "name": "E10.5:Isthmic organizer cells", "tf": "", "children": [{"id": "E11.5:Isthmic organizer cells", "name": "E11.5:Isthmic organizer cells", "tf": "", "children": [{"id": "E12.5:Isthmic organizer cells", "name": "E12.5:Isthmic organizer cells", "tf": "Setbp1, Rfx4, Npas3, Nfia, Pax3, Runx1t1, Mllt3, Nfib, Gli3, Sox6, Pou3f2, Pax7, Otx2, Tcf7l2, Elavl2, Mid1, Nfix, Zic3, Zfhx3, Lef1, Ankrd6, Hdac9, Meis2, Aff3, Zeb1, Phf21b, Trim24, Cux2, Rb1, Pou3f3, Sox11, Basp1, Notch1, Zic1, Bcl11a, Btbd11, Hsf2, Arnt2, Tle1, Sp1, Prdm16, Ebf3", "children": [{"id": "E13.5:Isthmic organizer cells", "name": "E13.5:Isthmic organizer cells", "tf": ""}]}, {"id": "E12.5:Retina epithelium", "name": "E12.5:Retina epithelium", "tf": "Vsx2, Vax2, Rax, Tbx20, Six3, Thrb, Pax6, Dpf3, Rorb, Pou2f2, Meis1, Zbtb16, Ank2, Aff1, Myb, Gas7, Tbx3, Nrip1, Camk4, Nr3c2, Foxp2, Pard3b, Lhx2, Nr3c1, Foxp1, Ssbp2, Rara, Arntl, Rora, Mitf, Esrrg, Baz2b, Pax2, Plagl1, Acyp2, Pawr, Hif1a, Rarb, Hmga2, Klf7"}]}]}]}, {"id": "E9.5:Neural progenitor", "name": "E9.5:Neural progenitor", "tf": "Ebf2, Onecut1, Myt1, Ebf3, St18, Ebf1, Neurod1, Setbp1, Hoxb3, Neurod4, Isl1, Hoxd3, Hoxd4, Hoxb4, Baz2b, Meis2, Hoxb3os, Aff3, Nkx6-1, Elavl2, Zeb1, Hoxa3, Rbfox3, Tcf4, Klf7, Ank2, Foxn3, Dach1, Ssbp3, Hoxc4, Meis1, Myt1l, Tfap2b, Prox1, Sncaip, Tfdp2, Tshz3, Ell2, Sox11, Notch1, Kdm5b, Pou3f2, Zbtb20, Runx1t1, Zhx3, Chd7, Tshz1, Basp1, Kidins220, Tle1, Rarb, Kmt2e, Dpf3, Tanc2, Ncoa1, Rorb, Mybl1, Glis2, Arid5b, Ankrd6, Zfpm2, Klf12", "children": [{"id": "E10.5:Cholinergic neuron", "name": "E10.5:Cholinergic neuron", "tf": "Isl1, Lhx4, Asap1, Isl2, Elavl2, Tanc2, Nfia, Nr2f2, Hoxc8, Hoxc9, Meis1, Ank1, Aff3, Jazf1, Hoxc5, Fam171b, Nfib, Basp1, Tshz3, Pbx1, Hivep2, Hmgcs1, Pbx3", "children": [{"id": "E11.5:Excitatory neuron", "name": "E11.5:Excitatory neuron", "tf": "", "children": [{"id": "E12.5:Cholinergic neuron", "name": "E12.5:Cholinergic neuron", "tf": "Tbx20, Isl1, Elavl2, Nfia, Lhx4, Tead1, Asap1, Satb2, Trps1, Ank2, Cers4, Foxp1, Zfpm2, Zeb2, Mecom, Ldb2"}, {"id": "E12.5:Excitatory neuron", "name": "E12.5:Excitatory neuron", "tf": "Ebf3, Runx1t1, Bcl11a, Zfhx3, Sox11, Pbx3, Mllt3, Pou2f2, Meis2, Foxp2, Pou2f1, Setbp1, Lmx1b, Klf12, Bach2, Basp1, Pknox2, Aff3, Uncx, Npas3, Ebf2, Zfp423, Pou4f1, Hoxb3, Sox4, Tle4, Tshz3, Ebf1, Phf21b, Nhlh2, Dpf3, Tcf12, Mid1, Pou6f2, Hoxb6, Dach2, Hoxb4, Hoxa3, Tshz1", "children": [{"id": "E13.5:Excitatory neuron", "name": "E13.5:Excitatory neuron", "tf": ""}]}]}]}, {"id": "E10.5:Inhibitory neuron prog.", "name": "E10.5:Inhibitory neuron prog.", "tf": "Lhx5, Lhx1, Pax2, Dpf3, Pax5, Scmh1, Pou6f2, Esrrg, Tfap2a, Cers6, Runx1t1, Pou2f2, St18, Nhlh2, Zfpm2, Sox6", "children": [{"id": "E11.5:Inhibitory interneuron", "name": "E11.5:Inhibitory interneuron", "tf": "Dlx1, Arx, Ssbp2, Isl1, Sox6, Sox5, Dlx2, Foxg1, Lhx8, Peg3, Tead1, Six3, Pax6, Notch1, Npas3, Ascl1, Lef1, Tfdp2, Nrf1, Gli2, Rorb, Zeb2, Zeb1, Nfia, Tead2, Nr2f2", "children": [{"id": "E12.5:Inhibitory interneuron", "name": "E12.5:Inhibitory interneuron", "tf": "", "children": [{"id": "E13.5:Inhibitory interneuron", "name": "E13.5:Inhibitory interneuron", "tf": ""}]}]}, {"id": "E11.5:Inhibitory neuron", "name": "E11.5:Inhibitory neuron", "tf": "Zfhx3, Mllt3, Myt1l, Hoxb6, Hoxb5, Tshz3, Pou6f2, Tanc2, Cux2, Onecut1, Hoxd4, Pax8, Hoxd3, Hoxb3, Hoxa3, Esrrg, Pbx3, Rarb, Sncaip, Hoxc6, Hoxc8, Hivep2, Runx1t1, Mecom", "children": [{"id": "E12.5:Inhibitory neuron", "name": "E12.5:Inhibitory neuron", "tf": "", "children": [{"id": "E13.5:Inhibitory neuron", "name": "E13.5:Inhibitory neuron", "tf": ""}]}]}, {"id": "E11.5:Inhibitory neuron prog.", "name": "E11.5:Inhibitory neuron prog.", "tf": "Ebf3, Ebf1, Ebf2, Dpf3, Lhx5, Lhx1, Ank2, St18, Tcf4, Nhlh2, Hdac9, Pax5, Uncx, Tfap2a, Elavl2, Zbtb16, Pax2, Dach1, Scmh1, Cers6, Pou2f2, Tfap2b, Tcf12, Zfp423, Fmnl2, Hoxb4, Rbfox3, Pax3, Myt1, Bach2, Hoxc4, Hoxa5, Dach2, Zfpm2", "children": [{"id": "E12.5:Inhibitory neuron prog.", "name": "E12.5:Inhibitory neuron prog.", "tf": "", "children": [{"id": "E13.5:Inhibitory neuron prog.", "name": "E13.5:Inhibitory neuron prog.", "tf": ""}]}]}]}, {"id": "E10.5:Neural progenitor", "name": "E10.5:Neural progenitor", "tf": "Rfx4, Tcf4, Tfdp2, Zeb2, Notch1, Chd7, Tead1, Pard3b, Setbp1, Npas3, Smad3, Foxp4, Baz2b, Ankrd6, Mybl1, Zeb1, Rai14, Gli3, Pax3, Gli2, Zbtb16, Trps1, Wwtr1, E2f1, Pou3f2, Prdm5, Pax7, Etv6, Tead2, Notch3, Cux1, Tcf12, Ezh2, Phf21a, Foxp1, Stag1, Foxn3, Ankhd1, Neurod4, Rbpj, Nrf1, Sox2, Hoxd4, Foxp2, Hmga2, Pax6, Baz1a, Prox1, Naa15, Hoxb3, Hoxb4, Brca1, Suz12, Hnrnpr, Dek, Ncor1, Satb2, Hoxd3, Tmpo, Fxr1, Rb1, Sncaip, Rarb, Hoxa3, Irf2, Sarnp, E2f3, Ell2, Sox9, Ikzf2, Hoxb6, Ski, Hoxc6, Rbl1, Agap3", "children": [{"id": "E11.5:Neural progenitor", "name": "E11.5:Neural progenitor", "tf": "", "children": [{"id": "E12.5:Neural progenitor", "name": "E12.5:Neural progenitor", "tf": "", "children": [{"id": "E13.5:Neural progenitor", "name": "E13.5:Neural progenitor", "tf": ""}]}]}]}, {"id": "E10.5:Postmitotic premature neuron", "name": "E10.5:Postmitotic premature neuron", "tf": "Lhx9, Lhx2, Sim1, Ebf3, Ebf1, Klf7, Shox2, Uncx, Mid1, 3632451O06Rik, Pou4f1, Klf12, Ebf2, Myt1l, Rora, Lef1, Btbd11, Tcf7l2", "children": [{"id": "E11.5:Granule neuron", "name": "E11.5:Granule neuron", "tf": "Eomes, Emx1, Nfia, Nfib, Tcf4, Sox6, Emx2, Tbr1, Etv1, St18, Foxg1, Kat6b, Gli3, Neurog2, Ezh2, Bcl11a, Neurod1, Gli2, Dmrta2, Setbp1, Chd7, Tead2, Lhx2, Ncoa1, Phf21a, Fmnl2, Dach1, Rbfox3, Foxp4, Brca1, Ebf2, Bbx, Notch1, Nr2f2, Rab8b, Tead1, Hdac8, Rcor1, Elavl2, Satb2, Nr2f1, Tle1, Tmpo, Dek, Atf7ip, Foxn3, Zeb1, Cbfb, Rb1, Rbl1, Tfdp2, Hmga2", "children": [{"id": "E12.5:Granule neuron", "name": "E12.5:Granule neuron", "tf": "", "children": [{"id": "E13.5:Granule neuron", "name": "E13.5:Granule neuron", "tf": ""}]}]}, {"id": "E11.5:Postmitotic premature neuron", "name": "E11.5:Postmitotic premature neuron", "tf": "Ebf1, Dpf3, Zfhx3, Meis1, Hivep2, Ank2, Pbx3, Dach2, Onecut1, Meis2, Rora, Pou2f2, Hoxb3, Basp1, Arid5b, Jazf1, Cux2, Runx1t1, Pou4f1, 3632451O06Rik, Hoxd3, Ebf3, Hoxd4, Bach2, Pou6f2, Rarb, Hoxb4, Fam171b, Hoxa5, Hoxa3, Acyp2, Hoxc6, Esrrg, Hoxc4, Nr6a1, Tfap2b, Tanc2, Hoxb6, Lmx1b, Hivep3, Cers6, Hmgcs1, Shox2, Maf, Klhl29, Tshz3, Tcf7l2", "children": [{"id": "E12.5:Postmitotic premature neuron", "name": "E12.5:Postmitotic premature neuron", "tf": "", "children": [{"id": "E13.5:Postmitotic premature neuron", "name": "E13.5:Postmitotic premature neuron", "tf": ""}]}]}]}]}, {"id": "E9.5:Notochord and floor plate", "name": "E9.5:Notochord and floor plate", "tf": "Foxa2, Rfx4, Esrrg, Foxp1, Pou6f2, Kank1, Notch2, Rora, Rfx3, Pard3b, Peg3, Foxp2, Npas3, Pbxip1, Lcorl, Rfx2, Sh3d19", "children": [{"id": "E10.5:Notochord and floor plate", "name": "E10.5:Notochord and floor plate", "tf": "", "children": [{"id": "E11.5:Notochord and floor plate", "name": "E11.5:Notochord and floor plate", "tf": "", "children": [{"id": "E12.5:Notochord and floor plate", "name": "E12.5:Notochord and floor plate", "tf": "", "children": [{"id": "E13.5:Notochord and floor plate", "name": "E13.5:Notochord and floor plate", "tf": ""}]}]}]}]}, {"id": "E9.5:Oligodendrocyte prog.", "name": "E9.5:Oligodendrocyte prog.", "tf": "Lhx2, Prdm16, Mecom, Nr2e1, Sox6, Six3, Hmga2, Sox5, Emx2, Pax6, Gli3, Dach2, Tle4, Plagl1, Pawr, Tcf7l2, Fam171b, Zic1, Nr2f2, Mitf", "children": [{"id": "E10.5:Oligodendrocyte prog.", "name": "E10.5:Oligodendrocyte prog.", "tf": "", "children": [{"id": "E11.5:Oligodendrocyte prog.", "name": "E11.5:Oligodendrocyte prog.", "tf": "Zbtb20, Dach2, Nr2f2, Otx2, Mecom, Pbx3, Six3, Zeb2, Tcf7l2, Peg3, Rfx3, Rorb, Pknox2, Meis1, Tfdp2, Arid5b, Lmo1, Sall3, Sox11, Zic1, Pou3f2, Klf7, Esrrg, Nrip1, Foxp4, Zic3, Runx1t1", "children": [{"id": "E12.5:Oligodendrocyte prog.", "name": "E12.5:Oligodendrocyte prog.", "tf": "", "children": [{"id": "E13.5:Oligodendrocyte prog.", "name": "E13.5:Oligodendrocyte prog.", "tf": ""}]}]}, {"id": "E11.5:Premature Oligodendrocyte", "name": "E11.5:Premature Oligodendrocyte", "tf": "Hmga2, Dach1, Kat6b, Sox6, Gli3, Emx1, Lhx2, Nfib, Bcl11a, Pbx1, Foxp1, Emx2, Bach2, Tshz3, Prrx1, Lef1, Tcf4, Foxn3, Nfix, Id4, Otx1, Pax6, Meis2", "children": [{"id": "E12.5:Premature Oligodendrocyte", "name": "E12.5:Premature Oligodendrocyte", "tf": "", "children": [{"id": "E13.5:Premature Oligodendrocyte", "name": "E13.5:Premature Oligodendrocyte", "tf": ""}]}]}]}]}]}]}, {"id": "E8.25:Neural crest", "name": "E8.25:Neural crest", "tf": "Sox9, Foxd3, Tfap2a, Msx1, Tfap2b, Id3, Msx2, Pax3, Tfap2c, Id1, Id2, Sp5, Snai1", "children": [{"id": "E8.5:Neural crest", "name": "E8.5:Neural crest", "tf": "", "children": [{"id": "E9.5:Neural crest", "name": "E9.5:Neural crest", "tf": "", "children": [{"id": "E10.5:Neural crest", "name": "E10.5:Neural crest", "tf": "", "children": [{"id": "E11.5:Neural crest", "name": "E11.5:Neural crest", "tf": "", "children": [{"id": "E12.5:Neural crest", "name": "E12.5:Neural crest", "tf": "", "children": [{"id": "E13.5:Neural crest", "name": "E13.5:Neural crest", "tf": ""}]}]}]}]}]}]}, {"id": "E8.25:Neuroectoderm", "name": "E8.25:Neuroectoderm", "tf": "Hesx1, Six3, Otx2, Rax, Lmo1, Lhx2, Foxd4, Lhx5, Dlx5"}, {"id": "E8.25:Spinal cord", "name": "E8.25:Spinal cord", "tf": "Hoxa1, Cdx1, Pax6, Hoxb2, Meis2, Pcbd1, Hes3", "children": [{"id": "E8.5:Spinal cord", "name": "E8.5:Spinal cord", "tf": "", "children": [{"id": "E9.5:Dorsal neural tube", "name": "E9.5:Dorsal neural tube", "tf": "Tcf7l2, Pax6, Rai14, Nkx6-1, Sall1, Foxb1, Hivep2, Hdac9, Sall3, Mecom, Gbx1, Hoxd4", "children": [{"id": "E10.5:Dorsal neural tube", "name": "E10.5:Dorsal neural tube", "tf": "", "children": [{"id": "E11.5:Dorsal neural tube", "name": "E11.5:Dorsal neural tube", "tf": "", "children": [{"id": "E12.5:Dorsal neural tube", "name": "E12.5:Dorsal neural tube", "tf": ""}]}]}]}, {"id": "E9.5:Radial glia", "name": "E9.5:Radial glia", "tf": "Zic1, Msx1, Pax3, Dach1, Zic2, Zfp423, Msx3, Dach2, Lmx1a, Prdm16, Dpf3, Id3, Pou6f2, Id2, Gli3, Pax7, Ldb2, Aff3, Nfat5, Smad6, Foxp2, Nr3c2, Nrip1, Klhl29, Zfpm2", "children": [{"id": "E10.5:Ependymal cells", "name": "E10.5:Ependymal cells", "tf": "Trp73, Foxj1, Lrrc6, Lmx1b, Fank1, Lmx1a, Elf4, Otx2, Dmbx1, Ankef1, Enpp2, Mafb, Ankrd45, Nr3c1, Aebp1, Esrrg, Myb, Ankrd42, Prdm16, Notch2, Nfia, Pbxip1, Ikzf2, Klhl29, Scmh1, Hdac8, Mid1, Smarca2, Rora, Pbx4, Nfat5, Foxo1, Trip4, Tsc22d1, Arid5b, Zic3, Rfx3, Rab15, Kdm5b, Tead1, Ell2, Msx1, Rfx2, Rnf14, Cited2, Mta3, Kidins220, Ssbp2, Gtf2ird1, Smad6, Mbd2, Sh3d19, Shank3, Tle4, Arid4a, Bbx, Nfkb1, Nrip1, Rab2a, Zmynd8, Satb1, Ldb2, Atf7ip", "children": [{"id": "E11.5:Ependymal cells", "name": "E11.5:Ependymal cells", "tf": "", "children": [{"id": "E12.5:Ependymal cells", "name": "E12.5:Ependymal cells", "tf": "", "children": [{"id": "E13.5:Ependymal cells", "name": "E13.5:Ependymal cells", "tf": ""}]}]}]}, {"id": "E10.5:Radial glia", "name": "E10.5:Radial glia", "tf": "Rfx4, Pax3, Dach1, Npas3, Chd7, Zeb2, Ezh2, Bcl11a, Tcf12, Pbx3, Cux1, Meis1, E2f3, Elavl2, Stag1, Bach2, Rbfox2, Zbtb16, Baz1b, Aff3, Sox5, Hoxb3, Ankhd1, Notch1, Tcf4, Srebf2, Phf21b, Dek, Rbl1, Ehmt1, Tmpo, Tead2, Pou3f2, Brca1, Setbp1, Etv6, Sox11, Zfp292, Hnrnpr, Gli3, Bcor, Pou3f3, Baz1a, Cpsf6, Arnt2, Hipk2, E2f1, Zfp423, Zmynd11, Taf3, Pax7, Ankrd10, Tcerg1, Rarb, Hmgcs1, Rbpj, Notch3, Taf1, Ctcf, Hoxb4, Ivns1abp, Mcm6, Ahctf1, Nfib, Rb1, Nrf1, Basp1, Fus, Foxp4, Aatf, Pou2f2, Hmga2, Lcor, Ssbp3, Foxp2, Ankrd26, Smad2, Hnrnpd, Gtf2f2, Rfc1, Sp4, Bard1, Ncor1, Supt3, Kmt2c, Pbrm1, Nfatc3, Zic1, Ccnt1, Cers6, Pds5b, Lcorl, Uhrf2, Mtf2, Hoxa3, Arhgap35, Sh3pxd2b, Ctbp2, Hoxd3, Ncoa3, Hoxd4, Irx2, Ppp3cb, Spen, Ybx3, Hira, E2f2, Tfdp2, Pax6, Naa15, Zmym2, Tshz1, Hes5, Zfp131, Sp1, Atm, Myt1l, Phf21a, Pms1, Sox2, Huwe1, Satb2, Hmgxb4, Ep300, Foxn2, Tshz3, Rorb, Gtf3c2, Id3, Smad4, Tle3, Suz12, Msx3, Nfx1, Asxl1, Gcfc2, Orc2, Ubp1, Kat6a, Pogk, Mllt3, Hoxc4, Ankrd6, Phf20, Brwd1, Mcm5, Tcf20, Ncoa5, Mapk8, Ybx1, Tmem131, Creb1, Dnmt1, Cnbp, Gbx1, Zfp451, Hoxb6, Tial1, Zfp354c, Hoxc6, Clock, Cbx3, Ecd, Ilf3, Cers5, Sox13, Sertad2", "children": [{"id": "E11.5:Radial glia", "name": "E11.5:Radial glia", "tf": "", "children": [{"id": "E12.5:Radial glia", "name": "E12.5:Radial glia", "tf": "", "children": [{"id": "E13.5:Radial glia", "name": "E13.5:Radial glia", "tf": ""}]}]}]}]}, {"id": "E9.5:Sensory neuron", "name": "E9.5:Sensory neuron", "tf": "Neurod1, Isl1, Six1, St18, Tfap2a, Shox2, Pou4f1, Tlx2, Onecut1, Tbx3, Ebf3, Ebf2, Tfap2b, Runx1t1, Myt1, Insm1, Ebf1, Six4, Zfp385a, Klf7, Rbfox3, Neurog1, Setbp1, Rbfox2, Zeb1, Basp1, Elavl2, Otx2, Bach2, Peg3, Foxn3, Zhx3, Mnat1, Fmnl2, Clock, Ank2, Ssbp3, Fam171b, Asap1, Kdm5b, Mef2a, Arid3a, Baz1a, Stat3, Zbtb20, Cers6, Tanc2, Rora, Sox11, Agap3, Nfib, Sox6, Sncaip, Klf12, 3632451O06Rik", "children": [{"id": "E10.5:Sensory neuron", "name": "E10.5:Sensory neuron", "tf": "", "children": [{"id": "E11.5:Sensory neuron", "name": "E11.5:Sensory neuron", "tf": "", "children": [{"id": "E12.5:Sensory neuron", "name": "E12.5:Sensory neuron", "tf": "", "children": [{"id": "E13.5:Sensory neuron", "name": "E13.5:Sensory neuron", "tf": ""}]}]}]}]}]}]}]}]}]}, {"id": "E7.5:Surface ectoderm", "name": "E7.5:Surface ectoderm", "tf": "Msx1, Rbbp7, Hand1, Msx2, Id1, Meis2, Tfap2a, Gata3, Id4, Cdx2, Hes1, Peg3, Id3, Hmgb3, Fos", "children": [{"id": "E7.75:Surface ectoderm", "name": "E7.75:Surface ectoderm", "tf": "", "children": [{"id": "E8:Surface ectoderm", "name": "E8:Surface ectoderm", "tf": "", "children": [{"id": "E8.25:Surface ectoderm", "name": "E8.25:Surface ectoderm", "tf": "", "children": [{"id": "E8.5:Surface ectoderm", "name": "E8.5:Surface ectoderm", "tf": "", "children": [{"id": "E9.5:Branchial arch epithelium", "name": "E9.5:Branchial arch epithelium", "tf": "Pax9, Prdm1, Isl1, Nr2f2, Rarb", "children": [{"id": "E10.5:Branchial arch epithelium", "name": "E10.5:Branchial arch epithelium", "tf": "", "children": [{"id": "E11.5:Branchial arch epithelium", "name": "E11.5:Branchial arch epithelium", "tf": "", "children": [{"id": "E12.5:Branchial arch epithelium", "name": "E12.5:Branchial arch epithelium", "tf": "", "children": [{"id": "E13.5:Branchial arch epithelium", "name": "E13.5:Branchial arch epithelium", "tf": ""}]}]}]}]}, {"id": "E9.5:Epidermis", "name": "E9.5:Epidermis", "tf": "Trp63, Tfap2b, Lmx1b, Arid5b, Pdlim1, Sox6, Tfap2a, Hoxc4, Meis1, Mid1, Trps1, Hoxc6, Camk4, Hoxc8, Msx1, Lef1, Kidins220, Rb1, Ank2, Hdac9", "children": [{"id": "E10.5:Epidermis", "name": "E10.5:Epidermis", "tf": "", "children": [{"id": "E11.5:Epidermis", "name": "E11.5:Epidermis", "tf": "Trp63, Sox6, Gli3, Klhl29, Mid1, Btbd11, Hmga2, Lef1, Meis2, Ssbp2, Camk4, Nfib, Gli2, Arid5b, Tfap2b, Cers6, Fmnl2, Sncaip, Asap1, Rora, Mllt3, Trps1, Bach2, Ankrd6, Zfp423, Meis1, Phf21a, Kank1, Trerf1, Bcor, Dnmt3a, Tanc2, Tfap2a, Mtf2, Ppargc1b, Tmem131, Rb1, Hoxc6, Sh3pxd2b, Smarca2, Tle4, Nfia, Aff3, Dach2", "children": [{"id": "E12.5:Epidermis", "name": "E12.5:Epidermis", "tf": "", "children": [{"id": "E13.5:Epidermis", "name": "E13.5:Epidermis", "tf": ""}]}]}, {"id": "E11.5:Pericardium", "name": "E11.5:Pericardium", "tf": "Notch3, Notch1, Ikzf2, Klf5, Irf2, Ahr, Ddx58, Kdm5b, Thrb, Ell2, Zfp36l1, Klf6, Dach1, Hes1, Fhl2, Elf1, Lrrk1, Rab15, Cux1, Zfhx3, Sox5, Arid3a, Pdlim1, Dpf3, Wwtr1, Klf7, Irf6, Plagl1, Sox9, Basp1, Aff1, Ank2, Zfp398, Foxo3", "children": [{"id": "E12.5:Pericardium", "name": "E12.5:Pericardium", "tf": ""}]}]}]}, {"id": "E9.5:Olfactory epithelium", "name": "E9.5:Olfactory epithelium", "tf": "Six3, Pax6, Mecom, Pard3b, Nr2e1, Otx1, Pbx3, Dmrta2, Dmbx1, Tcf7l2, Pitx1, Gli3, Ebf1, Sox2, Tle1, Thrb, Pax3, Foxp1, Bcl11a, Nfib, Ell2, Gli2", "children": [{"id": "E10.5:Olfactory epithelium", "name": "E10.5:Olfactory epithelium", "tf": "", "children": [{"id": "E11.5:Olfactory epithelium", "name": "E11.5:Olfactory epithelium", "tf": "", "children": [{"id": "E12.5:Olfactory epithelium", "name": "E12.5:Olfactory epithelium", "tf": "", "children": [{"id": "E13.5:Olfactory epithelium", "name": "E13.5:Olfactory epithelium", "tf": ""}]}]}]}]}, {"id": "E9.5:Otic epithelium", "name": "E9.5:Otic epithelium", "tf": "Tbx2, Lmx1a, Pax2, Sox10, Enpp2, Ebf3, Sox9, Pax8, Jazf1, Dach1, Sox5, Dach2, Runx1t1, Prox1, Six1, Phf21b, Mllt3, Klhl29, Nr2f1, Gata3, Aff3, Elavl2, Zbtb16, Sall2, Foxp2, Nfia, Npas3, Prdm16, Gtf3c1, Klf12, Lmo4"}, {"id": "E9.5:Urothelium", "name": "E9.5:Urothelium", "tf": "Hand1, Epas1, Dpf3, Wt1, Elf4, Tanc2, Bnc1, Tead1, Ncoa1, Rbbp7, Peg3, Klf6, Tbx3, Ppp1r13b, Ovol2, Pbx1, Cux2, Tbx20, Smad7, Zbtb20, Arnt, Zim1, Ppargc1b, Lrrk1, Zmynd8, Tead4, Htatsf1, Scmh1, Wwtr1, Mbd2, Tshz3, Sertad2, Cers2, Dnmt3a, Smad6, Foxo3", "children": [{"id": "E10.5:Urothelium", "name": "E10.5:Urothelium", "tf": ""}]}]}]}]}]}]}]}]}]}]}, {"id": "E6.5:Primitive Streak", "name": "E6.5:Primitive Streak", "tf": "Rbbp7, Mixl1, Id1, Eomes, T, Pitx2, Hes1, Id2", "children": [{"id": "E6.75:Nascent mesoderm", "name": "E6.75:Nascent mesoderm", "tf": "Lmo1, Hand1, Gata6, Lhx1, Hmga2, Peg3, Tbx3, Smad1, Etv2, Msx2, Msx1, Maged1, Id1, Lef1, Mixl1, Snai1", "children": [{"id": "E7:Haematoendothelial progenitors", "name": "E7:Haematoendothelial progenitors", "tf": "Lmo2, Fev, Tal1, Hhex, Etv2, Fli1, Gata2, Junb, Polr1d, Cited2, Id3, Rab11a, Jun, Jund, Myc", "children": [{"id": "E7.25:Haematoendothelial progenitors", "name": "E7.25:Haematoendothelial progenitors", "tf": "", "children": [{"id": "E7.5:Blood progenitors", "name": "E7.5:Blood progenitors", "tf": "Cited2, Cited4, Gata1, Gfi1b, Runx1, Ascl2, Klf1", "children": [{"id": "E7.75:Blood progenitors", "name": "E7.75:Blood progenitors", "tf": "Gata2, Fli1, Tead2, Id3, Hhex", "children": [{"id": "E8:Blood progenitors", "name": "E8:Blood progenitors", "tf": "", "children": [{"id": "E8.25:Blood progenitors", "name": "E8.25:Blood progenitors", "tf": "", "children": [{"id": "E8.5:Blood progenitors", "name": "E8.5:Blood progenitors", "tf": "", "children": [{"id": "E9.5:Blood progenitors", "name": "E9.5:Blood progenitors", "tf": "", "children": [{"id": "E10.5:Megakaryocytes", "name": "E10.5:Megakaryocytes", "tf": "Zfpm1, Shank3, Pard3b, Mpl, Gata1, Lmo2, Myb, Pbx1, Tfdp2, Dpf3, Bcl11a, Gfi1b, Runx1, Ncor1, Tal1, Hipk2, Pdlim1, Nfe2, Meis1, Ybx3, Mta3, Ank1, Cited4, Hdac7, Zbtb16, Elf1, Zeb1, Ikzf2, Mllt3, Ell2, Stat5b, Ahctf1, Myef2, Tada2a, Rcor1, Etv6, Dcaf6, Scap, Tle1, Mtf2, Pawr, Stat5a, Aatf, Pdcd11", "children": [{"id": "E11.5:Megakaryocytes", "name": "E11.5:Megakaryocytes", "tf": "", "children": [{"id": "E12.5:Megakaryocytes", "name": "E12.5:Megakaryocytes", "tf": "", "children": [{"id": "E13.5:Megakaryocytes", "name": "E13.5:Megakaryocytes", "tf": ""}]}]}]}, {"id": "E10.5:White blood cells", "name": "E10.5:White blood cells", "tf": "Hdac9, Maf, Tcf7l2, Tcf4, Trps1, Ifnar2, Zfhx3, Gas7, Tfec, Arid5b, Spi1, Mitf, Irf8, Hivep3, Mef2c, Rbpj, Nfkb1, Rel, Arhgap17, Wwp1, Hivep2, Cers6, Pparg, Bach2, Trim30a, Pias1, Zeb2, Irf5, Zfp36l1, Pou2f2, Elk3, Ankfy1, Ppard, Mef2a, Nfatc2, St18, Runx2, Smad1, Hltf, Ugp2, Id2, Notch2, Gli3, Elf4, Clock, Cbfb, Ank2, Fmnl2, Nfat5, Sh3pxd2b, Tanc2, Setbp1, Stat1, Hmbox1, Tle4, Foxp2, Rnf38, Aff1, Ski", "children": [{"id": "E11.5:White blood cells", "name": "E11.5:White blood cells", "tf": "", "children": [{"id": "E12.5:White blood cells", "name": "E12.5:White blood cells", "tf": "", "children": [{"id": "E13.5:White blood cells", "name": "E13.5:White blood cells", "tf": ""}]}]}]}]}]}]}]}]}, {"id": "E7.75:Erythroid", "name": "E7.75:Erythroid", "tf": "Klf1, Ell2", "children": [{"id": "E8:Erythroid", "name": "E8:Erythroid", "tf": "", "children": [{"id": "E8.25:Erythroid", "name": "E8.25:Erythroid", "tf": "", "children": [{"id": "E8.5:Erythroid", "name": "E8.5:Erythroid", "tf": "", "children": [{"id": "E9.5:Erythroid", "name": "E9.5:Erythroid", "tf": "", "children": [{"id": "E10.5:Erythroid", "name": "E10.5:Erythroid", "tf": "", "children": [{"id": "E11.5:Def. erythrocyte", "name": "E11.5:Def. erythrocyte", "tf": "Bcl11a, Runx1, Ssbp2, Nr3c1, Tcf12, Lmo2, Asap1, Scmh1, Myb, Etv6, Ahctf1, Aatf, Rai1, E2f3, Baz1a, Wwp1, Pawr, Rcor1, Cux1, Tshz1, Rsrc1, Ppargc1b, Hdac7, Sox6, Ctbp2, Zeb1, Nr1d2, Clock, Gtf2f2, Ehmt1, Tada2a, Mllt10, Tcf20, Polr1a, Atf7, Pdcd11, Nsd1, Zdhhc15, Naa15, Nfx1, Arhgap35, Mllt3, Orc2, Scap, Taf3, Ikzf1, Cdk7, Notch2, Gtf2h2, Tfdp1, Pard3b, Sh3d19, Zfp148, Ankrd10, Bdp1, Hmg20a, Zbtb16, Phf14, Ppard, Lrrk1, Foxn3, Gtf2ird1, Ash1l, Nr2c1, Fus, Prdm5, Hmgxb3, Hira, Elf4, Supt3, Zmynd11, Nfkb1, Gtf2h1, Ccnh, Bclaf1, Ankrd26, Ercc8, Mapk1, Kdm2b, Cers6, Tcerg1, Nfatc3, Sarnp, Zfp398, Med26, Ccnt2, Smad3, Max, Ivns1abp, Gtf2i, Zdhhc6, Foxn2, Zfp407, Zdhhc21, Rbm39, Pias2, Fbxw7, Invs, Shank3, Mid1, Zkscan3, Shprh, Dido1, Zfp592, Foxp1, Pfdn1, Chd7, Mef2c, Ybx3, Phf10, Ankrd49, Kat2b, Rab8b, Psmd9, Kdm5b, Ncoa5, Nrf1, Gcfc2, Nr6a1, Polr1b, Pms1, Huwe1, Ikbkb, Dcaf6, Mga, Phf20, Dcp1a, 5830417I10Rik, Pml, Ncoa6, Ccnt1, Ankhd1, Otud4, Taf4b, Thrap3, Pbx3, Smad2, Zfp207, Ecd, Zfp410, Gtf2e1, Ralgapa1, Zmynd8, Mri1, Mtf2, Zfp277, Mcm8, Cpsf6, Foxj3, Stat3, Baz2b, Ankib1, Nr2c2, Zdhhc13, Ubr7, Papola, Pcgf6, Khdrbs1, Kmt2a, Phf12, Med1, Ctnnbl1, Taf1b, Kdm4c, Deaf1, Naca, Atm, Rnps1, Med15, Mcm6, Helz, Ybx1, Mms19, Cops5, Gtf3c2, Zfp64, Atxn3, Fxr1, Hdac8, Rfc1, Kdm5a, Cnbp, Stat5a, Hmgxb4, Rlim, Ppp1r12b, Srsf5, Jmy, Zbtb20, Zmym2, Meis1, Trps1", "children": [{"id": "E12.5:Def. erythrocyte", "name": "E12.5:Def. erythrocyte", "tf": "", "children": [{"id": "E13.5:Def. erythrocyte", "name": "E13.5:Def. erythrocyte", "tf": ""}]}]}, {"id": "E11.5:Erythroid", "name": "E11.5:Erythroid", "tf": "Runx1t1, Pbx1, Tcf7l2, Peg3, Ank1, Arid3a, Hipk2, Ankrd6, Ell2, Creg1, E2f2, Pbrm1, Tal1, Trim24, Acyp2, Prox1, Bcor, Tanc2, Cited4, Smad6, Phf21a, Il31ra, Ncoa4, Pir, Ncoa1, Ncoa3, Nfe2, Tead1, Srebf2, Aff1, Mxi1, Sox11, Maz, Zfhx3, Gtf2e2, Sox4"}]}]}]}]}]}]}]}, {"id": "E7.5:Haematoendothelial progenitors", "name": "E7.5:Haematoendothelial progenitors", "tf": "Etv2, Hmga2, Peg3, Basp1, Id3, Mapk3, Id1, T, Tead2, Hand1, Foxf1, Pou5f1, Id2, Msx1, Xbp1, Asb4", "children": [{"id": "E7.75:Endothelium", "name": "E7.75:Endothelium", "tf": "Creg1, Rab11a, Lyl1, Carhsp1, Fli1, Klf7, Xbp1", "children": [{"id": "E8:Endothelium", "name": "E8:Endothelium", "tf": "", "children": [{"id": "E8.25:Endothelium", "name": "E8.25:Endothelium", "tf": "", "children": [{"id": "E8.5:Endothelium", "name": "E8.5:Endothelium", "tf": "", "children": [{"id": "E9.5:Endocardium", "name": "E9.5:Endocardium", "tf": "Sox6, Pdlim1, Smad6, Meis1, Meis2, Tbx20, Sncaip, Mecom, Gata6, Gata4, Setbp1, Nfia, Sox5, Smad7, Nfib, Runx1t1, Runx1, Pbx1, Jazf1, Foxp1, Zeb2, Notch3, Bcl11a, Mllt3, Ikzf2, Prdm16, Tanc2, Kank1, Elf1, Sh3d19, Nfatc1, Dnmt3a, Nfat5, Kat2b, Arid5b, Klhl29, Foxp4, Ebf1, Zfpm1, Pknox2, Epas1", "children": [{"id": "E10.5:Endocardium", "name": "E10.5:Endocardium", "tf": ""}]}, {"id": "E9.5:Endothelium", "name": "E9.5:Endothelium", "tf": "Mef2c, Tcf4, Fmnl2, Lef1, Nr2f2, Klf7, Elk3, Ets1, Enpp2, Ebf3, Nrip1, Lcorl, Lmo2, Gas7, Zfpm2, Lhx6, Ldb2, Erg, Zfp423, Shank3, Trps1, Nr5a2, Baz1a, Elf4, Zfp36l1, Ssbp2, Arhgap17", "children": [{"id": "E10.5:Endothelium", "name": "E10.5:Endothelium", "tf": "", "children": [{"id": "E11.5:Endothelium", "name": "E11.5:Endothelium", "tf": "", "children": [{"id": "E12.5:Endothelium", "name": "E12.5:Endothelium", "tf": "", "children": [{"id": "E13.5:Endothelium", "name": "E13.5:Endothelium", "tf": ""}]}]}]}]}]}]}]}]}, {"id": "E7.75:Haematoendothelial progenitors", "name": "E7.75:Haematoendothelial progenitors", "tf": "Etv2, Tal1, Prrx2, Cited2, Rbbp7, Hand1, Id2, Msx1, Cdx2, Hoxa7", "children": [{"id": "E8:Haematoendothelial progenitors", "name": "E8:Haematoendothelial progenitors", "tf": "", "children": [{"id": "E8.25:Haematoendothelial progenitors", "name": "E8.25:Haematoendothelial progenitors", "tf": "", "children": [{"id": "E8.5:Haematoendothelial progenitors", "name": "E8.5:Haematoendothelial progenitors", "tf": ""}]}]}]}]}]}]}, {"id": "E7:Nascent mesoderm", "name": "E7:Nascent mesoderm", "tf": "Eomes, Snai1, Pou5f1, Lhx1, Otx2, Mixl1, Smad1, Meis2, Sp5, Gsc, Lef1, Lmo1, Sox4, Pbx1, Basp1, Pdlim4, Rbbp7, Tgif1, Sap30, Hes1, Hand1, Id1, Msx2, Foxf1", "children": [{"id": "E7.25:Mesenchyme", "name": "E7.25:Mesenchyme", "tf": "Hand1, Foxf1, Msx2, Msx1, Id3, Klf6, Cited2, Tbx3, Hoxb2, Peg3, Cdx2", "children": [{"id": "E7.5:Mesenchyme", "name": "E7.5:Mesenchyme", "tf": "", "children": [{"id": "E7.75:Mesenchyme", "name": "E7.75:Mesenchyme", "tf": "", "children": [{"id": "E8:Mesenchyme", "name": "E8:Mesenchyme", "tf": "", "children": [{"id": "E8.25:Mesenchyme", "name": "E8.25:Mesenchyme", "tf": "", "children": [{"id": "E8.5:Mesenchyme", "name": "E8.5:Mesenchyme", "tf": "", "children": [{"id": "E9.5:Mesenchyme", "name": "E9.5:Mesenchyme", "tf": "", "children": [{"id": "E10.5:Mesenchyme", "name": "E10.5:Mesenchyme", "tf": "", "children": [{"id": "E11.5:Mesenchyme", "name": "E11.5:Mesenchyme", "tf": "", "children": [{"id": "E12.5:Mesenchyme", "name": "E12.5:Mesenchyme", "tf": "", "children": [{"id": "E13.5:Mesenchyme", "name": "E13.5:Mesenchyme", "tf": ""}]}]}]}]}]}]}]}]}]}]}, {"id": "E7.25:Nascent mesoderm", "name": "E7.25:Nascent mesoderm", "tf": "Lhx1, Sp5, Pou5f1, Sox4, Snai1, Gsc, T, Mycn, Mixl1, Eomes, Lef1, Lmo1", "children": [{"id": "E7.5:Intermediate mesoderm", "name": "E7.5:Intermediate mesoderm", "tf": "Hand1, Cdx2, Hoxb6, Hoxd9, Foxf1, Msx1, Hoxd1, Pitx1, Cdx4, Hoxb8, Msx2, Hoxa10, Myc, Fhl2, Hes1, Nkx1-2, Foxo4, Etv2", "children": [{"id": "E7.75:Allantois", "name": "E7.75:Allantois", "tf": "Pitx1, Hoxa10, Hoxa9, Hoxc8, Hoxc9, Hoxa11, Smad7, Hand1, Hoxa7, Twist2, Hoxb6, Tbx4, 3632451O06Rik, Hes1, Hand2, Hoxd9, Msx1, Isl1, Prrx2, Twist1, Msx2, Rbbp7, Foxf1, Tbx3, Snai1, Myc, Id3, Klf6, Etv2", "children": [{"id": "E8:Allantois", "name": "E8:Allantois", "tf": "", "children": [{"id": "E8.25:Allantois", "name": "E8.25:Allantois", "tf": "", "children": [{"id": "E8.5:Allantois", "name": "E8.5:Allantois", "tf": ""}]}]}]}, {"id": "E7.75:Intermediate mesoderm", "name": "E7.75:Intermediate mesoderm", "tf": "Hoxb1, Cited1, Cdx1, Hoxa1, Sp5, Pou5f1, Tbx6, Hoxb3os, Nr6a1, Hes7, T, Meox1, Hoxb2, Cited2, Tcea3, Lef1, Gbx2, Meis2, Notch1, Tead2, Sap30, Tgif1, Lmo2, Foxc2, Mycn, Pdlim4, Foxb1, Tcf15", "children": [{"id": "E8:Intermediate mesoderm", "name": "E8:Intermediate mesoderm", "tf": "Msx1, Hand1, Msx2, Foxf1, Cdx4, Id3, Hoxb6, Id2, Hoxd9, Id1, Hoxd1, Cdx2, Evx1, Hes1, Hoxb8", "children": [{"id": "E8.25:Intermediate mesoderm", "name": "E8.25:Intermediate mesoderm", "tf": "", "children": [{"id": "E8.5:Intermediate mesoderm", "name": "E8.5:Intermediate mesoderm", "tf": "", "children": [{"id": "E9.5:Limb mesenchyme prog.", "name": "E9.5:Limb mesenchyme prog.", "tf": "Prrx1, Sox6, Rarb, Zeb1, Bach2, Foxp2, Lef1, Msx1, Gli2, Runx1t1, Twist2, Tbx5, Tshz3, Twist1, Peg3, Alx1, Ldb2, Trps1, Tbx3, Bcl11a, Tshz1, Hdac9, Gata6, Lmo4, Pitx1, Gli3, Klf12, Prrx2, Ets2, Nfia, Irx3, Irx5, Basp1, Glis1, Ybx3, Erg, Hand2, Mid1, Ssbp3, Hoxa9, Sall4, Lmx1b, Orc2, Baz1a, Smad6, Cnbp, Asb4, Dach2", "children": [{"id": "E10.5:Limb mesenchyme prog.", "name": "E10.5:Limb mesenchyme prog.", "tf": "", "children": [{"id": "E11.5:Limb mesenchyme prog.", "name": "E11.5:Limb mesenchyme prog.", "tf": "", "children": [{"id": "E12.5:Limb mesenchyme prog.", "name": "E12.5:Limb mesenchyme prog.", "tf": ""}]}]}]}, {"id": "E9.5:Renal epithelium", "name": "E9.5:Renal epithelium", "tf": "Pax8, Pax2, Hnf1b, Lhx1, Sim1, Ppp1r16b, Tfap2a, Meox1, Sh3d19, Foxp1, Emx2, Zbtb20, Arid5b, Ppargc1a, Sall1, Hivep2, Wt1, Tle4, Gas7, Klhl29, Gata3, Aff1, Notch1, Rora, Dach1, Kank1, Etv4, Nrip1, Dnmt3a, Elf1, Klf7, Hoxb9, Kdm2b, Rb1, Pard3b, Hoxb4, Ikbkb, Fli1, Foxp4, Setbp1, Prdm16, Sncaip", "children": [{"id": "E10.5:Renal epithelium", "name": "E10.5:Renal epithelium", "tf": "", "children": [{"id": "E11.5:Renal epithelium", "name": "E11.5:Renal epithelium", "tf": "", "children": [{"id": "E12.5:Renal epithelium", "name": "E12.5:Renal epithelium", "tf": "", "children": [{"id": "E13.5:Renal epithelium", "name": "E13.5:Renal epithelium", "tf": ""}]}]}]}]}]}]}]}, {"id": "E8:Somitic mesoderm", "name": "E8:Somitic mesoderm", "tf": "Cdx1, Tbx6, Hes7, Foxb1, Meox1, Cited2, Sp5, Hoxb1, Meis2, Tcea3, Pou5f1, Foxc2, Tcf15", "children": [{"id": "E8.25:Somitic mesoderm", "name": "E8.25:Somitic mesoderm", "tf": "", "children": [{"id": "E8.5:Somitic mesoderm", "name": "E8.5:Somitic mesoderm", "tf": "", "children": [{"id": "E9.5:Somitic mesoderm", "name": "E9.5:Somitic mesoderm", "tf": ""}]}]}]}]}]}, {"id": "E7.5:Nascent mesoderm", "name": "E7.5:Nascent mesoderm", "tf": "Pou5f1, Sp5, T, Tbx6, Mixl1, Hes7, Lef1, Tcea3, Eomes, Hoxb1, Lhx1, Meis2, Cited1, Cdx1", "children": [{"id": "E7.75:Nascent mesoderm", "name": "E7.75:Nascent mesoderm", "tf": ""}]}, {"id": "E7.5:Paraxial mesoderm", "name": "E7.5:Paraxial mesoderm", "tf": "Tcf15, Alx1, Irx5, Foxc2, Irx3, Otx2, Pitx2, Irx1", "children": [{"id": "E7.75:Paraxial mesoderm", "name": "E7.75:Paraxial mesoderm", "tf": "", "children": [{"id": "E8:Paraxial mesoderm", "name": "E8:Paraxial mesoderm", "tf": "", "children": [{"id": "E8.25:Paraxial mesoderm", "name": "E8.25:Paraxial mesoderm", "tf": "", "children": [{"id": "E8.5:Paraxial mesoderm", "name": "E8.5:Paraxial mesoderm", "tf": "", "children": [{"id": "E9.5:Chondrocyte prog.", "name": "E9.5:Chondrocyte prog.", "tf": "Meox2, Hoxb3, Pax9, Meis1, Hoxd4, Sncaip, Hoxd3, Hoxb4, Meox1, Hoxc6, Tshz1, Peg3", "children": [{"id": "E10.5:Chondrocyte prog.", "name": "E10.5:Chondrocyte prog.", "tf": "Ebf2, Meis1, Nfib, Meis2, Hmga2, Peg3, Pax9, Hoxc6, Hoxd4, Hoxa3, Ebf3, Meox1, Cux1, Pax1, Sox11, Hoxc4, Tle4, Hoxc9, Hoxa5, Hoxc8, Asb4, Meox2, Hoxb6, Hoxb3, Fli1, Hoxc5, Elk3, Pbx1, Zim1, Hoxa9, Sncaip, Tfdp2, Dpf3", "children": [{"id": "E11.5:Chondrocyte prog.", "name": "E11.5:Chondrocyte prog.", "tf": "Pax9, Sox6, Pax1, Sox9, Dach1", "children": [{"id": "E12.5:Chondrocyte prog.", "name": "E12.5:Chondrocyte prog.", "tf": ""}]}, {"id": "E11.5:Connective tissue prog.", "name": "E11.5:Connective tissue prog.", "tf": "Setbp1, Nfia, Rora, Pbx1, Pard3b, Npas3, Prrx1, Smarca2, Meis1, Rarb, Ldb2, Zfpm2, Ebf3, Mid1, Zic1, Ebf2", "children": [{"id": "E12.5:Connective tissue prog.", "name": "E12.5:Connective tissue prog.", "tf": "", "children": [{"id": "E13.5:Connective tissue prog.", "name": "E13.5:Connective tissue prog.", "tf": ""}]}]}]}, {"id": "E10.5:Early chondrocyte", "name": "E10.5:Early chondrocyte", "tf": "Zfpm2, Zic1, Lmx1b, Prrx1, Klf6, Thrb, Zic2, Msx1, Nr3c1, Ankrd55, Zic3, Alx4, Nfia, Acyp2, Fmnl2, Tbx15, Ank2, Nr2f1, Tbx18, Rora, Dach2", "children": [{"id": "E11.5:Early chondrocyte", "name": "E11.5:Early chondrocyte", "tf": "", "children": [{"id": "E12.5:Early chondrocyte", "name": "E12.5:Early chondrocyte", "tf": "", "children": [{"id": "E13.5:Early chondrocyte", "name": "E13.5:Early chondrocyte", "tf": ""}]}]}]}]}, {"id": "E9.5:Jaw and tooth prog.", "name": "E9.5:Jaw and tooth prog.", "tf": "Myocd, Tbx18, Zfpm2, Hlf, Foxp2, Dach2, Ebf1, Fhl2, Zeb2, Rora, Zbtb20, Tbx15, Foxp1, Klf6, Dnmt3a, Twist2, Pard3b, Klf12, Thrb, Npas3, Nfib, Tle1, Mid1, Klf7, Dach1", "children": [{"id": "E10.5:Jaw and tooth prog.", "name": "E10.5:Jaw and tooth prog.", "tf": "", "children": [{"id": "E11.5:Jaw and tooth prog.", "name": "E11.5:Jaw and tooth prog.", "tf": "", "children": [{"id": "E12.5:Jaw and tooth prog.", "name": "E12.5:Jaw and tooth prog.", "tf": "", "children": [{"id": "E13.5:Jaw and tooth prog.", "name": "E13.5:Jaw and tooth prog.", "tf": ""}]}]}]}]}, {"id": "E9.5:Osteoblast prog.", "name": "E9.5:Osteoblast prog.", "tf": "Prrx1, Mecom, Fli1, Prdm16, Zbtb16, Tfap2b, Sox5, Tfap2a, Msx1, Alx1, Alx4, Tbx3, Nr2f1, Ssbp3, Runx1t1, Prrx2, Rai14, Ldb2, Satb2, Ebf2, Rarb", "children": [{"id": "E10.5:Chondrocyte and osteoblast", "name": "E10.5:Chondrocyte and osteoblast", "tf": "Hmga2, Pbx1, Hoxd4, Hoxc4, Meis1, Hoxc6, Bach2, Meis2, Zfhx3, Peg3, Hoxa3, Tbx5, Hoxc9, Hoxb3, Tshz3, Hoxc8, Aff3, Hoxb6, Hoxc5, Hoxa5, Asb4, Erg, Hdac9, Cux2, Glis1, Lmx1b, Rarb, Mid1, Runx2, Foxp1, Dach2, Isl1, Tbx3, Esrrg, Klhl29, Sox6, Tbx15", "children": [{"id": "E11.5:Chondrocyte and osteoblast", "name": "E11.5:Chondrocyte and osteoblast", "tf": "", "children": [{"id": "E12.5:Chondrocyte and osteoblast", "name": "E12.5:Chondrocyte and osteoblast", "tf": "", "children": [{"id": "E13.5:Chondrocyte and osteoblast", "name": "E13.5:Chondrocyte and osteoblast", "tf": ""}]}]}]}, {"id": "E10.5:Osteoblast prog.", "name": "E10.5:Osteoblast prog.", "tf": "Pknox2, Sox5, Mllt3, Pax3, Ebf1, Tle1, Etv1, Lhx8, Zbtb16, Enpp2, Zeb2, Satb2, Alx1"}]}, {"id": "E9.5:Skeletal muscle prog.", "name": "E9.5:Skeletal muscle prog.", "tf": "Pax3, Sim1, Dmrt2, Ppp1r16b, Pax7, Dpf3, Bach2, Hoxa3, Hoxc4, Wwtr1, Hoxa5, Zfhx3, Lef1, Esrrg, Aff3, Meis2, Kank1, Gli3, Tle4, Hdac9", "children": [{"id": "E10.5:Myocytes", "name": "E10.5:Myocytes", "tf": "Prdm16, Zeb2, Asb4, Ebf1, Ppargc1b, Arid5b, Nrip1, Hivep2, Foxp1, Ncoa1, Prox1, Zfpm2, Tbx3, Pitx2, Six1, Mef2a, Dach2, Id2, Plagl1, Mecom, Mef2c, Mid1, Dach1, Rb1", "children": [{"id": "E11.5:Myocytes", "name": "E11.5:Myocytes", "tf": "", "children": [{"id": "E12.5:Myocytes", "name": "E12.5:Myocytes", "tf": "", "children": [{"id": "E13.5:Myocytes", "name": "E13.5:Myocytes", "tf": ""}]}]}]}, {"id": "E10.5:Skeletal muscle prog.", "name": "E10.5:Skeletal muscle prog.", "tf": "Aff3, Zfhx3, Meis1, Hdac9, Meis2, Dmrt2, Prrx1, Sim1, Foxp2, Nfia, Nkd2, Erg, Nfib, Ebf2, Twist2, Tshz1, Bnc1, Gli2, Runx1t1, Pbx1, Cers6, Alx4, Klhl29, Zic1, Npas3, Hoxc4, Bcor, Hoxc6, Glis1, Ldb2, Hoxc9", "children": [{"id": "E11.5:Skeletal muscle prog.", "name": "E11.5:Skeletal muscle prog.", "tf": "", "children": [{"id": "E12.5:Skeletal muscle prog.", "name": "E12.5:Skeletal muscle prog.", "tf": ""}]}]}]}]}]}]}]}]}, {"id": "E7.5:Pharyngeal mesoderm", "name": "E7.5:Pharyngeal mesoderm", "tf": "Meis1, Tcf21, Hmga2, Id2, Id3, Mycn, Prrx2, Rbbp7, Mef2c, Gata6, Isl1", "children": [{"id": "E7.75:Cardiomyocytes", "name": "E7.75:Cardiomyocytes", "tf": "Fhl2, Mef2c, 3632451O06Rik, Gata5, Smyd1, Nkx2-5, Tgfb1i1, Ndn, Cited2, Ankrd1", "children": [{"id": "E8:Cardiomyocytes", "name": "E8:Cardiomyocytes", "tf": "", "children": [{"id": "E8.25:Cardiomyocytes", "name": "E8.25:Cardiomyocytes", "tf": "", "children": [{"id": "E8.5:Cardiomyocytes", "name": "E8.5:Cardiomyocytes", "tf": "", "children": [{"id": "E9.5:Cardiomyocytes", "name": "E9.5:Cardiomyocytes", "tf": "", "children": [{"id": "E10.5:Cardiomyocytes", "name": "E10.5:Cardiomyocytes", "tf": "", "children": [{"id": "E11.5:Cardiomyocytes", "name": "E11.5:Cardiomyocytes", "tf": "", "children": [{"id": "E12.5:Cardiomyocytes", "name": "E12.5:Cardiomyocytes", "tf": "", "children": [{"id": "E13.5:Cardiomyocytes", "name": "E13.5:Cardiomyocytes", "tf": ""}]}]}]}]}]}]}]}]}, {"id": "E7.75:Pharyngeal mesoderm", "name": "E7.75:Pharyngeal mesoderm", "tf": "Tbx1, Tcf21, Sox11, Irx3, Mycn, Id3, Irx5", "children": [{"id": "E8:Pharyngeal mesoderm", "name": "E8:Pharyngeal mesoderm", "tf": "", "children": [{"id": "E8.25:Pharyngeal mesoderm", "name": "E8.25:Pharyngeal mesoderm", "tf": "", "children": [{"id": "E8.5:Pharyngeal mesoderm", "name": "E8.5:Pharyngeal mesoderm", "tf": "", "children": [{"id": "E9.5:Pharyngeal mesoderm", "name": "E9.5:Pharyngeal mesoderm", "tf": ""}]}]}]}]}]}]}]}]}, {"id": "E6.75:Primitive Streak", "name": "E6.75:Primitive Streak", "tf": "Pou5f1, Utf1, Id2", "children": [{"id": "E7:Anterior Primitive Streak", "name": "E7:Anterior Primitive Streak", "tf": "Lhx1, Hhex, Gsc, Gata6, Foxa2, Sox17, Sp5, Otx2, Mixl1, Asb4, Cited2, Hes1, Hmga2, Hmgb3, T, Foxj1", "children": [{"id": "E7.25:Anterior Primitive Streak", "name": "E7.25:Anterior Primitive Streak", "tf": "Pou5f1, Mixl1, T, Hdac1, Gsc, Eomes, Utf1, Sp5"}, {"id": "E7.25:Def. endoderm", "name": "E7.25:Def. endoderm", "tf": "Sox17, Hesx1, Elf3, Ovol2, Id1, Peg3, Klf6", "children": [{"id": "E7.5:Def. endoderm", "name": "E7.5:Def. endoderm", "tf": "Lhx1, Hhex, Otx2, Gsc, Six3, T, Eomes, Pou5f1", "children": [{"id": "E7.75:Def. endoderm", "name": "E7.75:Def. endoderm", "tf": "", "children": [{"id": "E8:Def. endoderm", "name": "E8:Def. endoderm", "tf": "", "children": [{"id": "E8.25:Def. endoderm", "name": "E8.25:Def. endoderm", "tf": "", "children": [{"id": "E8.5:Def. endoderm", "name": "E8.5:Def. endoderm", "tf": ""}]}]}]}]}, {"id": "E7.5:Gut", "name": "E7.5:Gut", "tf": "Cited1, Pcbd1, Elf3, Fhl2, Rbbp7, Peg3, Id1, Rhox5", "children": [{"id": "E7.75:Gut", "name": "E7.75:Gut", "tf": "", "children": [{"id": "E8:Gut", "name": "E8:Gut", "tf": "", "children": [{"id": "E8.25:Gut", "name": "E8.25:Gut", "tf": "", "children": [{"id": "E8.5:Gut", "name": "E8.5:Gut", "tf": "", "children": [{"id": "E9.5:Gut", "name": "E9.5:Gut", "tf": "", "children": [{"id": "E10.5:Gut", "name": "E10.5:Gut", "tf": "Mecom, Tcf4, Dach1, Pbx1, Trps1, Tead1, Ikzf2, Gli3, Mid1, Hoxd4, Setbp1, Hoxb3, Esrrg, Pard3b, Sox6, Baz2b, Aff3, Hivep2, Sim1, Sox11, Etv6, Pax2, Klhl29, Zfp423, Cux1, Hdac9, Nrip1, Lef1, Fmnl2, Hoxd3, Hoxb4, Hmga2, Smad3, Sox4, Hoxb6, Rarb, Ctbp2, Gata3, Btbd11, Zbtb20, Ssbp3, Zbtb16, Mllt3, Tle4, Arnt2, Pax8, Rb1, Notch3, Npas3, Basp1, Hoxa3, Emx2, Bcl11a, Kdm2b, Nfat5, Rfx6, Tfap2b, Foxp2, Phf14, Satb2, Lcorl, Ldb2, Ssbp2, Satb1, Tshz1, Nr2f2, Cers4, Hnf1b, Prdm1, Dnmt3a, Hoxc4, Asap1, Rfx3, Arid3b, Gli2, Sncaip, Khdrbs1, Trerf1, Hoxc6, Hdac8, Plagl1, Pawr, Meis2, Sh3pxd2b, Kdm5b, Gtf2ird1, Sox9, Acyp2, Smarca2, Tfcp2l1, Hdac7, Lmo4, Gata4, Elavl2, Smad7, Prrx1, Elf1, Ebf4, Pknox2, Ppp4r1l-ps, Tead2", "children": [{"id": "E11.5:Lung/Stomach/Intestine epithelium", "name": "E11.5:Lung/Stomach/Intestine epithelium", "tf": "", "children": [{"id": "E12.5:Lung/Stomach/Intestine epithelium", "name": "E12.5:Lung/Stomach/Intestine epithelium", "tf": "", "children": [{"id": "E13.5:Lung/Stomach/Intestine epithelium", "name": "E13.5:Lung/Stomach/Intestine epithelium", "tf": ""}]}]}]}, {"id": "E10.5:Hepatocytes", "name": "E10.5:Hepatocytes", "tf": "Prox1, Dpf3, Onecut3, Hlf, Nr5a2, Zeb1, Stat5b, Sh3d19, Klf12, Hnf4a, Ank2, Mlxipl, Nfia, Rbfox2, Onecut1, Thrb, Tfeb, Atf6, Asb4, Nfib, Fem1b, Foxn2, Dcaf6, Tcf7l2, Ahctf1, Clock, Pdlim1, Nr3c1, Hnf4g, Nfx1, Max, Mef2d, Bcorl1, Ybx3, Fxr1, Ell2, Gtf2h1, Bach2, Cnbp, Zbtb7a, Sox5, Pdcd11, Wwp1, Elf2, Tial1, Aatf, Polr1a, Ell, Rbbp7", "children": [{"id": "E11.5:Hepatocytes", "name": "E11.5:Hepatocytes", "tf": "", "children": [{"id": "E12.5:Hepatocytes", "name": "E12.5:Hepatocytes", "tf": "", "children": [{"id": "E13.5:Hepatocytes", "name": "E13.5:Hepatocytes", "tf": ""}]}]}]}]}]}]}]}]}]}]}]}, {"id": "E7:Primitive Streak", "name": "E7:Primitive Streak", "tf": "Pou5f1, Utf1, Mycn, Id2", "children": [{"id": "E7.25:PGC", "name": "E7.25:PGC", "tf": "Id1, Msx2, Cdx2, Msx1, Hand1, Rbbp7, T, Pdlim4, Peg3, Cited2, Evx1, Isl1, Maged1, Cited1, Foxf1", "children": [{"id": "E7.5:PGC", "name": "E7.5:PGC", "tf": "", "children": [{"id": "E7.75:PGC", "name": "E7.75:PGC", "tf": "", "children": [{"id": "E8:PGC", "name": "E8:PGC", "tf": "", "children": [{"id": "E8.25:PGC", "name": "E8.25:PGC", "tf": ""}]}]}]}]}, {"id": "E7.25:Primitive Streak", "name": "E7.25:Primitive Streak", "tf": "Utf1, Eomes, Otx2, Ctbp2, Foxj1, Foxa2", "children": [{"id": "E7.5:Caudal mesoderm", "name": "E7.5:Caudal mesoderm", "tf": "Cdx2, Cdx1, Hoxa1, Nkx1-2, Gbx2, Meis2, Hoxb2, Hoxb1, Hmgb3, Hes7, Rbbp7, Hes3, Cited2, Pdlim4, Peg3", "children": [{"id": "E7.75:Caudal mesoderm", "name": "E7.75:Caudal mesoderm", "tf": "", "children": [{"id": "E8:Caudal mesoderm", "name": "E8:Caudal mesoderm", "tf": "", "children": [{"id": "E8.25:NMP", "name": "E8.25:NMP", "tf": "", "children": [{"id": "E8.5:NMP", "name": "E8.5:NMP", "tf": "", "children": [{"id": "E9.5:NMP", "name": "E9.5:NMP", "tf": ""}]}]}]}]}]}, {"id": "E7.5:Notochord", "name": "E7.5:Notochord", "tf": "Foxj1, Foxa2, T, Jund, Sp5, Tsc22d3, Hsbp1, Cebpb, Asb4, Lhx1, Tcea3, Fos, Hhex", "children": [{"id": "E7.75:Notochord", "name": "E7.75:Notochord", "tf": "", "children": [{"id": "E8:Notochord", "name": "E8:Notochord", "tf": ""}]}]}, {"id": "E7.5:Primitive Streak", "name": "E7.5:Primitive Streak", "tf": "Eomes, Utf1, Pou3f1"}]}]}]}]}]}]}, {"id": "E4.5:Hypoblast", "name": "E4.5:Hypoblast", "tf": "", "children": [{"id": "E5.5:Visceral endoderm", "name": "E5.5:Visceral endoderm", "tf": "Gsc, Lhx1, Eomes, Ripk4, Hesx1, Peg3, Hhex, Mixl1", "children": [{"id": "E6.5:Visceral endoderm", "name": "E6.5:Visceral endoderm", "tf": "", "children": [{"id": "E6.75:Visceral endoderm", "name": "E6.75:Visceral endoderm", "tf": "", "children": [{"id": "E7:Visceral endoderm", "name": "E7:Visceral endoderm", "tf": "", "children": [{"id": "E7.25:Visceral endoderm", "name": "E7.25:Visceral endoderm", "tf": "", "children": [{"id": "E7.5:Visceral endoderm", "name": "E7.5:Visceral endoderm", "tf": ""}]}]}]}]}]}, {"id": "E5.5:ExE endoderm", "name": "E5.5:ExE endoderm", "tf": "Tbx3, Creb3l3, Id3, Id1, Id2, Hnf1b, Sox17", "children": [{"id": "E6.5:ExE endoderm", "name": "E6.5:ExE endoderm", "tf": "", "children": [{"id": "E6.75:ExE endoderm", "name": "E6.75:ExE endoderm", "tf": "", "children": [{"id": "E7:ExE endoderm", "name": "E7:ExE endoderm", "tf": "", "children": [{"id": "E7.25:ExE endoderm", "name": "E7.25:ExE endoderm", "tf": "", "children": [{"id": "E7.5:ExE endoderm", "name": "E7.5:ExE endoderm", "tf": "", "children": [{"id": "E7.75:ExE endoderm", "name": "E7.75:ExE endoderm", "tf": "", "children": [{"id": "E8:ExE endoderm", "name": "E8:ExE endoderm", "tf": "", "children": [{"id": "E8.25:ExE endoderm", "name": "E8.25:ExE endoderm", "tf": "", "children": [{"id": "E8.5:ExE endoderm", "name": "E8.5:ExE endoderm", "tf": ""}]}]}]}]}]}]}]}]}]}, {"id": "E5.5:Parietal endoderm", "name": "E5.5:Parietal endoderm", "tf": "Sox7, Cited2, Klf5, Xbp1, Tead4, Prss35, Snai1, Gata6, Tfec, Msl3, Epas1", "children": [{"id": "E6.5:Parietal endoderm", "name": "E6.5:Parietal endoderm", "tf": "", "children": [{"id": "E6.75:Parietal endoderm", "name": "E6.75:Parietal endoderm", "tf": "", "children": [{"id": "E7:Parietal endoderm", "name": "E7:Parietal endoderm", "tf": "", "children": [{"id": "E7.25:Parietal endoderm", "name": "E7.25:Parietal endoderm", "tf": "", "children": [{"id": "E7.5:Parietal endoderm", "name": "E7.5:Parietal endoderm", "tf": "", "children": [{"id": "E7.75:Parietal endoderm", "name": "E7.75:Parietal endoderm", "tf": "", "children": [{"id": "E8:Parietal endoderm", "name": "E8:Parietal endoderm", "tf": ""}]}]}]}]}]}]}]}]}]}, {"id": "E3.5:TE", "name": "E3.5:TE", "tf": "", "children": [{"id": "E4.5:ExE ectoderm", "name": "E4.5:ExE ectoderm", "tf": "", "children": [{"id": "E5.5:ExE ectoderm", "name": "E5.5:ExE ectoderm", "tf": "", "children": [{"id": "E6.5:ExE ectoderm", "name": "E6.5:ExE ectoderm", "tf": "", "children": [{"id": "E6.75:ExE ectoderm", "name": "E6.75:ExE ectoderm", "tf": "", "children": [{"id": "E7:ExE ectoderm", "name": "E7:ExE ectoderm", "tf": "", "children": [{"id": "E7.25:ExE ectoderm", "name": "E7.25:ExE ectoderm", "tf": "", "children": [{"id": "E7.5:ExE ectoderm", "name": "E7.5:ExE ectoderm", "tf": "", "children": [{"id": "E7.75:ExE ectoderm", "name": "E7.75:ExE ectoderm", "tf": "", "children": [{"id": "E8:ExE ectoderm", "name": "E8:ExE ectoderm", "tf": "", "children": [{"id": "E8.25:ExE ectoderm", "name": "E8.25:ExE ectoderm", "tf": ""}]}]}]}]}]}]}]}]}]}]}]}

    // Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;
    // variables for drag/drop
    var selectedNode = null;
    var draggingNode = null;
    // panning variables
    var panSpeed = 200;
    var panBoundary = 20; // Within 20px from edges will pan when dragging.
    // Misc. variables
    var i = 0;
    var duration = 750;
    var root;

    // size of the diagram
    var viewerWidth = $(document).width();
    var viewerHeight = $(document).height();

    var tree = d3.layout.tree()
        .size([viewerHeight, viewerWidth]);

    // define a d3 diagonal projection for use by the node paths later on.
    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            return [d.y, d.x];
        });

    // A recursive helper function for performing some setup by walking through all nodes

    function visit(parent, visitFn, childrenFn) {
        if (!parent) return;

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);
            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(treeData, function(d) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);

    }, function(d) {
        return d.children && d.children.length > 0 ? d.children : null;
    });


    // sort the tree according to the node names

    function sortTree() {
        tree.sort(function(a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
    }
    // Sort the tree initially incase the JSON isn't in a sorted order.
    sortTree();

    // TODO: Pan function, can be better implemented.

    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            translateCoords = d3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            scaleX = translateCoords.scale[0];
            scaleY = translateCoords.scale[1];
            scale = zoomListener.scale();
            svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListener.scale(zoomListener.scale());
            zoomListener.translate([translateX, translateY]);
            panTimer = setTimeout(function() {
                pan(domNode, speed, direction);
            }, 50);
        }
    }

    // Define the zoom function for the zoomable tree

    function zoom() {
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }


    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

    function initiateDrag(d, domNode) {
        draggingNode = d;
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
        d3.select(domNode).attr('class', 'node activeDrag');

        svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
            if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
            else return -1; // a is the hovered element, bring "a" to the front
        });
        // if nodes has children, remove the links and nodes
        if (nodes.length > 1) {
            // remove link paths
            links = tree.links(nodes);
            nodePaths = svgGroup.selectAll("path.link")
                .data(links, function(d) {
                    return d.target.id;
                }).remove();
            // remove child nodes
            nodesExit = svgGroup.selectAll("g.node")
                .data(nodes, function(d) {
                    return d.id;
                }).filter(function(d, i) {
                    if (d.id == draggingNode.id) {
                        return false;
                    }
                    return true;
                }).remove();
        }

        // remove parent link
        parentLink = tree.links(tree.nodes(draggingNode.parent));
        svgGroup.selectAll('path.link').filter(function(d, i) {
            if (d.target.id == draggingNode.id) {
                return true;
            }
            return false;
        }).remove();

        dragStarted = null;
    }

    // define the baseSvg, attaching a class for styling and the zoomListener
    var baseSvg = d3.select("#tree-container").append("svg")
        .attr("width", viewerWidth)
        .attr("height", viewerHeight)
        .attr("class", "overlay")
        .call(zoomListener);


    // Define the drag listeners for drag/drop behaviour of nodes.
    dragListener = d3.behavior.drag()
        .on("dragstart", function(d) {
            if (d == root) {
                return;
            }
            dragStarted = true;
            nodes = tree.nodes(d);
            d3.event.sourceEvent.stopPropagation();
            // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
        })
        .on("drag", function(d) {
            if (d == root) {
                return;
            }
            if (dragStarted) {
                domNode = this;
                initiateDrag(d, domNode);
            }

            // get coords of mouseEvent relative to svg container to allow for panning
            relCoords = d3.mouse($('svg').get(0));
            if (relCoords[0] < panBoundary) {
                panTimer = true;
                pan(this, 'left');
            } else if (relCoords[0] > ($('svg').width() - panBoundary)) {

                panTimer = true;
                pan(this, 'right');
            } else if (relCoords[1] < panBoundary) {
                panTimer = true;
                pan(this, 'up');
            } else if (relCoords[1] > ($('svg').height() - panBoundary)) {
                panTimer = true;
                pan(this, 'down');
            } else {
                try {
                    clearTimeout(panTimer);
                } catch (e) {

                }
            }

            d.x0 += d3.event.dy;
            d.y0 += d3.event.dx;
            var node = d3.select(this);
            node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
            updateTempConnector();
        }).on("dragend", function(d) {
            if (d == root) {
                return;
            }
            domNode = this;
            if (selectedNode) {
                // now remove the element from the parent, and insert it into the new elements children
                var index = draggingNode.parent.children.indexOf(draggingNode);
                if (index > -1) {
                    draggingNode.parent.children.splice(index, 1);
                }
                if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
                    if (typeof selectedNode.children !== 'undefined') {
                        selectedNode.children.push(draggingNode);
                    } else {
                        selectedNode._children.push(draggingNode);
                    }
                } else {
                    selectedNode.children = [];
                    selectedNode.children.push(draggingNode);
                }
                // Make sure that the node being added to is expanded so user can see added node is correctly moved
                expand(selectedNode);
                sortTree();
                endDrag();
            } else {
                endDrag();
            }
        });

    function endDrag() {
        selectedNode = null;
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
        d3.select(domNode).attr('class', 'node');
        // now restore the mouseover event or we won't be able to drag a 2nd time
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
        updateTempConnector();
        if (draggingNode !== null) {
            update(root);
            centerNode(draggingNode);
            draggingNode = null;
        }
    }

    // Helper functions for collapsing and expanding nodes.

    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function expand(d) {
        if (d._children) {
            d.children = d._children;
            d.children.forEach(expand);
            d._children = null;
        }
    }

    var overCircle = function(d) {
        selectedNode = d;
        updateTempConnector();
    };
    var outCircle = function(d) {
        selectedNode = null;
        updateTempConnector();
    };

    // Function to update the temporary connector indicating dragging affiliation
    var updateTempConnector = function() {
        var data = [];
        if (draggingNode !== null && selectedNode !== null) {
            // have to flip the source coordinates since we did this for the existing connectors on the original tree
            data = [{
                source: {
                    x: selectedNode.y0,
                    y: selectedNode.x0
                },
                target: {
                    x: draggingNode.y0,
                    y: draggingNode.x0
                }
            }];
        }
        var link = svgGroup.selectAll(".templink").data(data);

        link.enter().append("path")
            .attr("class", "templink")
            .attr("d", d3.svg.diagonal())
            .attr('pointer-events', 'none');

        link.attr("d", d3.svg.diagonal());

        link.exit().remove();
    };

    // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    function centerNode(source) {
        scale = zoomListener.scale();
        x = -source.y0;
        y = -source.x0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

    // Toggle children function

    function toggleChildren(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        return d;
    }

    // Toggle children on click.

    function click(d) {
        if (d3.event.defaultPrevented) return; // click suppressed
        d = toggleChildren(d);

        //add tf
        if(d.tf){alert(d.tf);}

        update(d);
        centerNode(d);
    }

    function update(source) {
        // Compute the new height, function counts total children of root node and sets tree height accordingly.
        // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
        // This makes the layout more consistent.
        var levelWidth = [1];
        var childCount = function(level, n) {

            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0);

                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function(d) {
                    childCount(level + 1, d);
                });
            }
        };
        childCount(0, root);
        var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line  
        tree = tree.size([newHeight, viewerWidth]);

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function(d) {
            d.y = (d.depth * (maxLabelLength * 10)); //maxLabelLength * 10px
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        });

        // Update the nodes…
        node = svgGroup.selectAll("g.node")
            .data(nodes, function(d) {
                return d.id || (d.id = ++i);
            });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
            //.call(dragListener)
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', click);

        nodeEnter.append("circle")
            .attr('class', 'nodeCircle')
            .attr("r", 0)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        nodeEnter.append("text")
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("dy", ".35em")
            .attr('class', 'nodeText')
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            })
            .style("fill-opacity", 0);

        // phantom node to give us mouseover in a radius around it
        nodeEnter.append("circle")
            .attr('class', 'ghostCircle')
            .attr("r", 30)
            .attr("opacity", 0.2) // change this to zero to hide the target area
        .style("fill", "red")
            .attr('pointer-events', 'mouseover')
            .on("mouseover", function(node) {
                overCircle(node);
            })
            .on("mouseout", function(node) {
                outCircle(node);
            });

        // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            });

        // Change the circle fill depending on whether it has children and is collapsed
        node.select("circle.nodeCircle")
            .attr("r", 4.5)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Fade the text in
        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select("circle")
            .attr("r", 0);

        nodeExit.select("text")
            .style("fill-opacity", 0);

        // Update the links…
        var link = svgGroup.selectAll("path.link")
            .data(links, function(d) {
                return d.target.id;
            });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
                var o = {
                    x: source.x0,
                    y: source.y0
                };
                return diagonal({
                    source: o,
                    target: o
                });
            });

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function(d) {
                var o = {
                    x: source.x,
                    y: source.y
                };
                return diagonal({
                    source: o,
                    target: o
                });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    // Define the root
    root = treeData;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;

    // Layout the tree initially and center on the root node.
    update(root);
    centerNode(root);
});