import React from 'react';
// import Wine from '../components/Wine';
import '../components/Wine.css';
import './Trade.css';
import GardCab from './../assets/img/wines/Gard-Cabernet-Sauv.jpg';
import SilverPinot from './../assets/img/wines/Silver-2013-Pinot-Noir.jpg';
import SilverPinotRose from './../assets/img/wines/Silver-Pinot-Noir-Rose.jpg';
import SilverReddick from './../assets/img/wines/Silver-Trentotto.jpg';
import SilverTrentotto from './../assets/img/wines/Silver-2013-Sangiovese.jpg';
import SilverCab from './../assets/img/wines/Silver-2013-cabernet-sauvignon.jpg';
import SilverSang from './../assets/img/wines/Silver-2013-Sangiovese.jpg';
import SilverCoteau from './../assets/img/wines/Silver-Coteau-Palmer.jpg';
import GrassiCab from './../assets/img/wines/Grassi-2015-Cab.jpg';
import GrassiSang from './../assets/img/wines/Grassi-Sangiovese.jpg';
import GrassiRibolla from './../assets/img/wines/Grassi-Ribolla-Gialla.png';
import CosaObraSauv from './../assets/img/wines/Cosa-Obra-Sauvignon.jpg';
import CosaObraPinot from './../assets/img/wines/Cosa-Obra-Pinot-Noir.jpg';

export default function Trade() {
    
    // const wines = [
        
    //     {
    //         name: 'Gard 2015 Cabernet Sauvignon',
    //     },
    //     {
    //         name: 'Silver 2013 Pinot Noir SBC',
    //     },
    //     {
    //         name: 'Silver 2018 Rose of Pinot Noir',
    //     },
    //     {
    //         name: 'Silver NV Reddick Street Red Blend',
    //     },
    //     {
    //         name: 'Silver 2010 Trentotto File Syrah',
    //     },
    //     {
    //         name: 'Silver 2013 Cabernet Sauvignon',
    //     },
    //     {
    //         name: 'Silver 2013 Sangiovese',
    //     },
    //     {
    //         name: 'Silver 2014 Coteau Palmer Pinot Noir',
    //     },
    //     {
    //         name: 'Grassi 2015 Cabernet Sauvignon',
    //     },
    //     {
    //         name: 'Grassi Sangiovese',
    //     },
    //     {
    //         name: 'Grassi 2016 Ribolla Gialla',
    //     },
    //     {
    //         name: '2019 Cosa Obra Sauvignon Blanc',
    //     },
    //     {
    //         name: '2016 Cosa Obra Pinot Noir',
    //     },
        


    // ]

    return (
        <div className="trade-container">
            <div className="trade-description-container width-1200-container">
                <h3 className="trade-description">Are you a wine shop or restaurant owner? If so, see our wide range of wines available for sale in California and New York below. Please note our selection of wine is for the trade only and not for sale to the general public.</h3>
            </div>
            <div className="wine-list-container">
                <ul className="wine-list plain-list">
                    {/* {wines.map((w) => 
                        <li>
                            <Wine name={w.name} imgSrc={SilverSang}/>
                        </li>
                    )} */}

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={GardCab} alt='Gard 2015 Cabernet Sauvignon'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Gard 2015 Cabernet Sauvignon</h2>
                                    <h3>The Wine</h3>
                                    <p>Sourced from Lawrence Vineyards; Corfu Crossing, Scarlin, Laura Lee, Solasksen, Columbia Valley, Washington. Fermented in 73% concrete tanks and 27% stainless steel. Aged in 63% new French oak for 26 months. Made using four of the Lawrence’s six Vineyards planted with Cabernet Sauvignon, all of them having quite different soils, elevations and aspects. Bottled unfined and unfiltered.</p>
                                    <h3>The Vineyard</h3>
                                    <p>Gard Vintners is 100% estate grown sustainable at Lawrence Vineyards on the Royal Slope of Columbia Valley AVA, featuring seven distinct vineyard sites with elevations ranging 930 feet to 1,675 feet. The combination of elevation and south-facing slope provides a great framework for grape production, while the diversity of the seven locations delivers a high level of complexity to Gard wines. Lawrence Vineyards is certified sustainable by Vinewise.org.</p>
                                    <h3>The Winery</h3>
                                    <p>Founded in 2006, Gard Vintners is a family-owned and operated estate winery. Aryn Morell is at the helm as winemaker at our production facility in Walla Walla, and tasting rooms in Ellensburg, Walla Walla and Woodinville. Our Mission at Gard is to capture and bottle the unique characteristics of the land we farm. We humbly craft value-driven, award-winning wines from our sustainable estate vineyards to create lasting memories for our customers.</p>

                                    <div className="small-info"><h4>Release Date:</h4><p>Fall 2019</p></div>
                                    <div className="small-info"><h4>Blend:</h4><p>88% Cabernet Sauvignon, 7% Cabernet Franc, and 5% Merlot</p></div>
                                    <div className="small-info"><h4>Titratable Acidity:</h4><p>4.3 g/L</p></div>
                                    <div className="small-info"><h4>pH:</h4><p>3.72</p></div>
                                    <div className="small-info"><h4>Alcohol:</h4><p>14.2%</p></div>
                                    <div className="small-info"><h4>Winemaker:</h4><p>Aryn Morell</p></div>
                                    <div className="small-info"><h4>Cases:</h4><p>685 cases</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$324 / 12-bottle case</p></div>

                                </div>

                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={SilverPinot} alt='Silver 2013 Pinot Noir SBC'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Silver 2013 Pinot Noir SBC</h2>
                                    <p>Winemaker Notes: The 2013 vintage started off quickly with a little heat wave that sent unprepared growers into a panicked picking frenzy. There was a serious labor shortage, and both Chardonnay & Pinot Noir ripened at the same time. My two clones were very carefully harvested after I was forced to wait a nail biting 10 days past when I called the pick. Luckily, the 2013 vintage was built for finesse. The fruit was beautiful, and I treated it with the utmost respect. I removed the “Coteau Palmer” fanciful name for the 2013 vintage, a de-classification, if you will, only because the alcohol was over 13%. The 2014-2017 vintages are all under 14% alcohol, where I believe they need to be for future bottlings. Still a sleeping baby, the 2013 vintage Pinot Noir SBC will unwind & present a myriad of complexity with a little time.  It has both finesse & structure. Beautiful strawberry & blackberry fruit upfront, cinnamon spice, with a grounding earthiness. The big ball of fruit in the mid palate: red & black fruits maintains finesse into the finish, a trademark of the 2013 vintage.</p>
                                    <div className="small-info"><h4>Varietals:</h4><p>100% Pinot Noir</p></div>
                                    <div className="small-info"><h4>Clones:</h4><p>Swiss 2A & Dijon 115</p></div>
                                    <div className="small-info"><h4>Vineyards:</h4><p>100% Premier Vineyard  Los Alamos Valley</p></div>
                                    <div className="small-info"><h4>Harvest Date:</h4><p>09/19/13</p></div>
                                    <div className="small-info"><h4>Winemaking:</h4><p>100% whole clusters were hand-sorted into 700L Billon Barrels & cold soaked for four days. Fermented on the skins for a total of 19 days. Aged for 36 months in new & seasoned French Oak. Bottled unfined & unfiltered.</p></div>
                                    <div className="small-info"><h4>Alcohol:</h4><p>14%</p></div>
                                    <div className="small-info"><h4>Date Bottled:</h4><p></p></div>
                                    <div className="small-info"><h4>Case Production:</h4><p>230 cases</p></div>
                                    <div className="small-info"><h4>Closure:</h4><p>Nomacorc Select 100 X 44mm (Synthetic)</p></div>
                                    <div className="small-info"><h4>Release:</h4><p>April/May 2018 with 12 months in bottle</p></div>
                                    <div className="small-info"><h4>Drinking Range:</h4><p>2018 - 2024</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$271 / 12-bottle case</p></div>
                                                                   
                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={SilverPinotRose} alt='Silver 2018 Rose of Pinot Noir'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Silver 2018 Rose of Pinot Noir</h2>
                                    <p>Blue Reviews: "Pale salmon hue; juicy and rich with a silky texture and tangy flavors. Showing more depth than your typical rosé, this is made in a vin gris style: whole cluster–pressed, barrel-fermented with proprietary yeast, and aged on the lees for ten months." - 91 points April 2020</p>
                                    <div className="small-info"><h4>Alcohol:</h4><p>13.2%</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$216 / 12-bottle case</p></div>

                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={SilverReddick} alt='Silver NV Reddick Street Red Blend'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Silver NV Reddick Street Red Blend</h2>
                                    <p>“Smooth and juicy, spicy and long with lush texture and a balanced finish; a lovely blend of six red varieties; rich and complex, long and deep” ADBlue, Blue Lifestyle (Tasting Panel).</p>
                                    <p>Imagine Benjamin’s Brain. Imagine Benjamin’s Brain in a bottle. It’s an insanely crazy blend of opposites that form magic when brought together. 2010, 2011 & a little 2013 Vintage: Red & Dark fruits, Spice, with a deep core of fruit. Perfect balance & a very versatile Red wine. Already a tasting room FAVORITE, top seller. The Blend is mostly old vine Sangiovese from the Santa Maria Bench (49%). Happy Canyon AVA See Clone Cabernet Sauvignon(31%) and Mourvedre (8%) Cabernet Franc (6%)  Pinot Noir (3%) & Syrah (3%). Sometimes, a big blend is better than the individual parts.</p>
                                    <div className="small-info"><h4>Alcohol:</h4><p>13.5%</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$276 / 12-bottle case</p></div>

                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={SilverTrentotto} alt='Silver 2010 Trentotto File Syrah'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Silver 2010 Trentotto File Syrah - currently sold out</h2>
                                    <p>92pts Wine Enthusiast: "Beautiful aromas of roasted pork in a blackberry-licorice reduction sauce pick up a bit of grape candy before hitting the palate with black pepper, blueberries and solid tannins. It’s fun…"  — M.K.  (3/1/2015)</p>
                                    <p>The 2010 vintage from my 3 acre block of 38 short rows at White Hawk Vineyard in Los Alamos.  A blend of Clones 470 & 174. Perfectly balanced from a very long growing season at 13% alcohol.</p>
                                    <p>The 2010 vintage from my 3 acre block of 38 short rows at White Hawk Vineyard in Los Alamos.  A blend of Clones 470 & 174. Perfectly balanced from a very long growing season at 13% alcohol.</p>
                                    <p>This is a wine built to last, one I hope to be able to drink for the next 15-20 years!  (I recommend cellar ageing it for at least one to two years if possible to allow the bottle bouquet to develop more.</p>
                                    <h3>Vineyard Sources</h3>
                                    <p>92% White Hawk Vineyard in Los Alamos</p>
                                    <p>8% Vogelzang Vineyard in Happy Canyon</p>
                                    <div className="small-info"><h4>Price:</h4><p>$224 / 12-bottle case</p></div>
                                
                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={SilverCab} alt='Silver 2013 Cabernet Sauvignon'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Silver 2013 Cabernet Sauvignon</h2>
                                    <p>This is a special wine, hard to describe, approachable, but built to last for many many years to come.  Sourced from Douglas Cramer’s vineyard in Los Olivos planted circa 1972, owned by Koehler Winery & called “Casa Blanca Vineyard”. Farmed by vineyard manager & close friend of mine, the legendary Felipe Hernandez. Pretty aromas of dark fruit & lavender, an expansive mid-palate that will unwind for years, and a long lingering finish with tannin to prove this is some serious s.h.i.t.</p>
                                    <div className="small-info"><h4>Harvest Date:</h4><p>10/24/13</p></div>
                                    <div className="small-info"><h4>Varietals:</h4><p>92% Cabernet Sauvignon, 5% Sangiovese, 3% Cabernet Franc</p></div>
                                    <div className="small-info"><h4>Vineyards:</h4><p>92% Casa Blanca Vineyard at Koehler Winery, 5% Oak Savanna Vineyard in Los Olivos, 3% Coghlin Vineyard in Los Olivos/Happy Canyon</p></div>
                                    <div className="small-info"><h4>Winemaking:</h4><p>Fermented in 700L Billon Barrels for 20 days. Aged for 36 months in seasoned French Oak. </p><p>Bottled unfined & unfiltered.</p></div>
                                    <div className="small-info"><h4>Alcohol:</h4><p>13.2%</p></div>
                                    <div className="small-info"><h4>Date Bottled:</h4><p>May 5, 2017</p></div>
                                    <div className="small-info"><h4>Closure:</h4><p>Nomacorc Select 100 X 44mm (Synthetic) </p></div>
                                    <div className="small-info"><h4>Release:</h4><p>June 2018 with 13 months in bottle</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$388 / 12-bottle case</p></div>
                                    
                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={SilverSang} alt='Silver 2013 Sangiovese'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Silver 2013 Sangiovese</h2>
                                    <p>From the wind-beaten hillside at White Hawk Vineyard, in silica rich ancient sand dune soils, comes our second vineyard designated release of 100% Sangiovese. The 2013 vintage Sangiovese WHK Vineyard is more open-knit and dark fruit driven, earthier the Oak Savanna. Aged in 700L French Oak barrels. Approachable now, and a glimpse of the bright future of Sangiovese in California. </p>
                                    <p>Only 100 cases produced.</p>
                                    <div className="small-info"><h4>Alcohol:</h4><p>13.8%</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$290 / 12-bottle case</p></div>

                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={SilverCoteau} alt='Silver 2014 Coteau Palmer Pinot Noir'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Silver 2014 Coteau Palmer Pinot Noir</h2>
                                    <p>Located in the northern Los Alamos Valley, Premiere Vineyard is at the intersection of 101 North and Palmer Road. "Coteau Palmer" or "Palmer Hillside" is my own fanciful description of this block, tucked back in a canyon, on a steep sandy hill.</p>
                                    <p>Planted to Swiss Clone 2A and Dijon Clone 115, the vines are now over 20 years old. The block faces southwest, and enjoys fantastic exposure all day while being sheltered by the surrounding hills. Yields barely reach two tons per acre, and the clusters and berries are very small.</p>
                                    <p>The 2014 vintage wines showed the serious drought was in effect with a high ratio of skins to juice. These wines have a silky feel and an enormous, dense mid-palate that will carry them for many years ahead. Whole cluster fermentation adds multi-dimensional aromatics and extra tannin frame the big ball of fruit. The 2014 seems to be filled with energy & holding on tight ready to develop & unwind.</p>
                                    <div className="small-info"><h4>Vineyard:</h4><p>100% Premiere Vineyard Los Alamos</p></div>
                                    <div className="small-info"><h4>Harvest:</h4><p>Clone 115 August 21, 2014, Clone 2A August 26, 2014</p></div>
                                    <div className="small-info"><h4>Fermentation:</h4><p>100% whole cluster in 700L & 860L barrels for 30 days, and then drained and basket pressed directly to barrel.</p></div>
                                    <div className="small-info"><h4>Barrel Aging:</h4><p>100% 3-4 year old French Oak barrels "sur lees" or "on the lees" for a full 24 months. </p></div>
                                    <div className="small-info"><h4>Date Bottled:</h4><p>May 4, 2017</p></div>
                                    <div className="small-info"><h4>Bottle Aging:</h4><p>22 months</p></div>
                                    <div className="small-info"><h4>Case Production:</h4><p>139 cases</p></div>
                                    <div className="small-info"><h4>Closure:</h4><p>28 cases Rich Xiberta 44mm Natural Cork,  111 cases Nomacorc Select 100 X 44mm (Synthetic)</p></div>
                                    <div className="small-info"><h4>Release:</h4><p>March 2019</p></div>
                                    <div className="small-info"><h4>Drinking Range:</h4><p>Spring 2019 - 2034</p></div>
                                    <div className="small-info"><h4>Alcohol:</h4><p>13.5%</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$366 / 12-bottle case</p></div>


                                    
                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={GrassiCab} alt='Grassi 2015 Cabernet Sauvignon'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Grassi 2015 Cabernet Sauvignon</h2>
                                    <p>The Grassi Estate Vineyard was planted in 2001 with the intention of making wines that we enjoy. Focusing on bright fruit characteristics, elegance without high alcohol and overly extracted qualities. The vineyard is located on Soda Canyon Road and is comprised of Cabernet Sauvignon (Clones 337, 4 and 6), Merlot (Clone 314), and Cabernet Franc (Clone 4).</p>
                                    <div className="small-info"><h4>Harvest:</h4><p>Harvested October 20th-28th. Harvested by hand.</p></div>
                                    <div className="small-info"><h4>Winemaking:</h4><p>The fruit was hand-sorted and fermented whole berry. Aged in French Oak, 65% New French oak for 20 months. Winemaker Robbie Meyer.</p></div>
                                    <div className="small-info"><h4>Wine:</h4><p>600 Cases produced. The final blend is 88% Cabernet Sauvignon, 6% Cabernet Franc., 6%Merlot 6.1 g/L Total Acidity, 3.72 pH, 14.2% Alc.</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$700 / 12-bottle case</p></div>
                                    
                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={GrassiSang} alt='Grassi Sangiovese'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Grassi Sangiovese</h2>
                                    <p>The Sangiovese is sourced from our neighbor Tom Fazekas' vineyard, just across the street from our own property on Soda Canyon Road. Our love of Italian varietals is what drew us to produce our own expression of Sangiovese.</p>
                                    <div className="small-info"><h4>Vineyard Source:</h4><p>Fazekas Vineyard Napa Valley.	</p></div>
                                    <div className="small-info"><h4>Harvest:</h4><p>The first week of October 2015. Harvested by hand.</p></div>
                                    <div className="small-info"><h4>Winemaking:</h4><p>The fruit was hand-sorted and fermented whole berry. The fermentation occurred in small vats employing punch down technique. Aging in French oak, 30% new French oak. Winemaker Robbie Meyer. 200 Cases produced. </p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$450 / 12-bottle case</p></div>


                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={GrassiRibolla} alt='Grassi 2016 Ribolla Gialla'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">Grassi 2016 Ribolla Gialla</h2>
                                    <p>The Ribolla Gialla is sourced from George Vare’s 3-acre vineyard located on Dry Creek Road, just north of the town of Napa. We had no intention of producing a white wine, but when the opportunity arose to produce our own Ribolla Gialla, a varietal that we enjoy very much, we could not pass it up. This is our seventh production of Ribolla Gialla.</p>
                                    <div className="small-info"><h4>Vineyard Source:</h4><p>Vare Vineyard, the original plantings of Ribolla Gialla in the United States.</p></div>
                                    <div className="small-info"><h4>Harvest:</h4><p>The Ribolla was hand harvested the last week of September 2016.</p></div>
                                    <div className="small-info"><h4>Winemaking:</h4><p>The Ribolla was whole cluster pressed, the first press was allowed to macerate with the skins before completing the press program. Indigenous fermentation, no malolactic. The wine is aged sur lie in neutral French Oak barrels for 7 months. The Ribolla was bottled in April 2017</p></div>
                                    <div className="small-info"><h4>Alcohol:</h4><p>14.1%</p></div>
                                    <div className="small-info"><h4>Wine:</h4><p>150 cases produced 100% Ribolla Gialla</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$324 / 12-bottle case</p></div>
                                    <div className="small-info"><h4>BTG (3 case) Price:</h4><p>$264 / 12-bottle case</p></div>
                                    

                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={CosaObraSauv} alt='2019 Cosa Obra Sauvignon Blanc'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">2019 Cosa Obra Sauvignon Blanc</h2>
                                    <h3>Tasting Notes</h3>
                                    <p>This enticing Sauvignon Blanc offers aromas of white peach, cantaloupe, and orange blossom complemented by bright citrus, lemon curd and zest.  Tropical flavors of kiwi, pineapple, lemon, mango and papaya reveal a rich palate and a satisfying mineral finish. A great aperitif, this pairs nicely with just about any seafood dish, and is a great companion with cheese.</p>
                                    <h3>Vineyard</h3>
                                    <p>Sourced from a small artisan grower located in the eastern slopes of the Sonoma Valley known as Fallenleaf Vineyard. The grapes grown at this site possesses a unique tropical varietal characteristic, which has become  synonymous of the style of Sauvignon Blanc we produce.</p>
                                    <h3>Winemaking</h3>
                                    <p>Grapes were picked in the cool early morning hours, and immediately to press the delicate fruit and chilled to preserve freshness.  The juice is immediately inoculated with yeast and nutrients to complete primary fermentation in tank, with the addition of neutral French Oak barrels to add complexity.</p>
                                    <h3>Analysis</h3>
                                    <div className="small-info"><h4>Varietal:</h4><p>100% Sauvignon Blanc Clone 1 and Sauvignon Musqué</p></div>
                                    <div className="small-info"><h4>Appellation:</h4><p>Sonoma Coast</p></div>
                                    <div className="small-info"><h4>pH:</h4><p>3.12</p></div>
                                    <div className="small-info"><h4>TA:</h4><p>6.8 g/L</p></div>
                                    <div className="small-info"><h4>Alcohol:</h4><p>14.2%</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$220 / 12-bottle case</p></div>


                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="wine-container">
                            <div className="wine-img-container">
                                <img src={CosaObraPinot} alt='2016 Cosa Obra Pinot Noir'/>
                            </div>
                            <div className="wine-info-container">
                                <div className="wine-info-container-main">
                                    <h2 className="wine-name">2016 Cosa Obra Pinot Noir</h2>
                                    <h3>Tasting Notes</h3>
                                    <p>Garnet color in the glass. The nose opens slowly over time revealing aromas of dark cherry, spice, and tobacco. A full mid-palate with flavors of black cherry, blueberry-pomegranate and cherry cola, embellished with toasty oak in the background. Well rounded, integrated tannins and texturally appealing with a soft and sleek mouthfeel. </p>
                                    <h3>Vineyard</h3>
                                    <p>Certified California Sustainable Winegrowing (CCSW). The Sangiacomo Southern Sonoma Vineyard was first planted in 1974. The Sangiacomo Family is well known for growing ultra-premium Pinot Noir in Sonoma County. Select wineries source their fruit to make cooler climate Pinot Noir. We have always been enamored by Los Carneros, just South of downtown Sonoma.</p>
                                    <h3>Winemaking</h3>
                                    <p>Picked in the darkness of the early morning hours, all grapes immediately subjected to rigorous hand sorting and refinement process. Whole berries are gently delivered to tank. Cold soaks last five to seven days, and fermentations are managed via a combination of delestage and pumpovers. Extended maceration ranging from three to four weeks fine-tuned tannin profiles, allowing us to perfect mouth feel and wine complexity. This wine was aged 9 months in 100% French oak, 30% of which was new. </p>
                                    <h3>Analysis</h3>
                                    <div className="small-info no-margin-top"><h4>Varietal:</h4><p>100% Pommard Pinot Noir </p></div>
                                    <div className="small-info"><h4>Appellation:</h4><p>Sonoma Coast, Sonoma County (Los Carneros) </p></div>
                                    <div className="small-info"><h4>Vineyard:</h4><p>Sangiacomo Vineyard, Southern Sonoma </p></div>
                                    <div className="small-info"><h4>Aging:</h4><p>9 Months in 100% French Oak, 30% New </p></div>
                                    <div className="small-info"><h4>pH:</h4><p>3.8</p></div>
                                    <div className="small-info"><h4>TA:</h4><p>6.1 g/L</p></div>
                                    <div className="small-info"><h4>Alcohol:</h4><p>14.1%</p></div>
                                    <div className="small-info"><h4>Price:</h4><p>$268 / 12-bottle case</p></div>
                                    
                                </div>
                                {/* <div className="wine-aside">
                                    <h3>For redistributors, resellers, and restaurants</h3>
                                </div> */}
                            </div>
                        </div>
                    </li>

                </ul>
            </div>        
        </div>
    )
}
