import { resizeMode } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React, { Component } from "react";
import {  Modal,TouchableHighlight,Text,ImageBackground,Image, View,TouchableOpacity ,StyleSheet } from "react-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
const SCROLL_VIEW_WIDTH = 360;
const TOTAL_WIDTH = 1080;
const SCROLL_INTERVAL = 3000;
const SCROLL_VIEW_WIDTH_2 = 360;
const SCROLL_INTERVAL_2 = 4000;

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentIndex2: 0,
      modalVisible: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let nextIndex = this.state.currentIndex + 1;
      if (nextIndex >= 6) {
        nextIndex = 0;
      }
      this.innerScrollView.scrollTo({ x: nextIndex * SCROLL_VIEW_WIDTH, animated: true });
      this.setState({ currentIndex: nextIndex });
    }, SCROLL_INTERVAL);

    this.interval2 = setInterval(() => {
      let nextIndex2 = this.state.currentIndex2 + 1;
      if (nextIndex2 >= 7) {
        nextIndex2 = 0;
      }
      this.innerScrollView2.scrollTo({ x: nextIndex2 * SCROLL_VIEW_WIDTH_2, animated: true });
      this.setState({ currentIndex2: nextIndex2 });
    }, SCROLL_INTERVAL_2);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
nava=()=>{
    this.props.navigation.navigate("Solo Leveling")
}
navb=()=>{
  this.props.navigation.navigate("Mashle")
}
navc=()=>{
  this.props.navigation.navigate("Spy Classroom")
}
navd=()=>{
  this.props.navigation.navigate("Reborn to Master the Blade")
}
nave=()=>{
  this.props.navigation.navigate("Classroom for Heroes")
}
navf=()=>{
  this.props.navigation.navigate("Konosuba")
}
nav2=()=>{
  this.props.navigation.navigate("Animes")
}
  //loop autoscroll ,took me two days to figure this out ;)
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  render() {
    return (
      <View style={styles.container}>
       <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <ImageBackground style={{width:360,height:700}} source={require('./src/assets/modal.png')}>
          <View style={{marginTop:200}}>
            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text style={styles.closeButtonText}>Proceed to Arisa</Text>
            </TouchableHighlight>
            
          </View>
          </ImageBackground>
        </Modal>
      <ScrollView vertical={true}  >
      <ImageBackground style={{backgroundColor:'#22282A'}}>
        <View style={styles.section1}>
          <ImageBackground style={{flex: 1, 
    width: '100%', 
    height: '100%',
    resizeMode:'contain'}}source={require('./src/assets/textnew.png')}>
           

          </ImageBackground>

        </View>
        <TouchableWithoutFeedback style={{ backgroundColor: '#F4CD39',
        width: 150,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:30,}}>
             <Text style={styles.text1}>Upcoming Animes</Text>
           </TouchableWithoutFeedback>
      <ScrollView  ref={(scrollView) => { this.innerScrollView = scrollView; }} horizontal={true} style={{flexDirection:'row',
    flex: 1,marginTop:5}} >
      <TouchableOpacity onPress={ this.navf}>
        <View style={styles.withinStyle}>
          <ImageBackground style={styles.imageBackground} source={require('./src/assets/konosuba.jpeg')}>
          </ImageBackground>
        </View >
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.nava}>
        <View style={styles.withinStyle}>
          <ImageBackground style={styles.imageBackground} source={require('./src/assets/sololeveling.jpg')}>
          </ImageBackground>
        </View ></TouchableOpacity>

        <TouchableOpacity onPress={ this.navb}>
        <View style={styles.withinStyle}>
          <ImageBackground style={styles.imageBackground} source={require('./src/assets/mashle.jpg')}>
          </ImageBackground>
        </View ></TouchableOpacity>

        <TouchableOpacity onPress={ this.navc}>
        <View style={styles.withinStyle}>
          <ImageBackground style={styles.imageBackground} source={require('./src/assets/spy.jpg')}>
          </ImageBackground>
        </View ></TouchableOpacity>

        <TouchableOpacity onPress={ this.navd}>
        <View style={styles.withinStyle}>
          <ImageBackground style={styles.imageBackground} source={require('./src/assets/reborn.png')}>
          </ImageBackground>
        </View ></TouchableOpacity>

        <TouchableOpacity onPress={ this.nave}>
        <View style={styles.withinStyle}>
          <ImageBackground style={styles.imageBackground} source={require('./src/assets/classroom.png')}>
          </ImageBackground>
        </View ></TouchableOpacity>
        
      </ScrollView>
      <TouchableWithoutFeedback style={styles.to} >
             <Text style={styles.text1}>Updates</Text>
           </TouchableWithoutFeedback>
      <ScrollView ref={(scrollView) => { this.innerScrollView2 = scrollView; }} horizontal={true} style={{flexDirection:'row',
    flex: 1,marginTop:5}} >
      <View style={styles.within}>
          <ImageBackground style={styles.imageBackground} source={require('./src/assets/anime1.jpg')}>
          <TouchableOpacity style={{ backgroundColor: '#F4CD39',
        width: 50,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:130,
        marginLeft:290}} >
             <Text style={styles.text1}>-></Text>
           </TouchableOpacity>
          </ImageBackground>
        </View >

      <View style={styles.within}>
      <ImageBackground style={styles.imageBackgroundup} source={require('./src/assets/aot.png')}>
        <TouchableWithoutFeedback style={styles.up}>
          <Text style={{ fontWeight: 'bold' }}>Aot S4</Text>
        <Text style={{fontSize:12 }} >
           The fourth and final season of the Attack on Titan anime series Attack on Titan was produced by MAPPA, chief directed by Jun Shishido, and directed by Yuichiro Hayashi, replacing Tetsurō Araki and Masashi Koizuka, respectively.
        </Text>
        </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
      <View style={styles.within}>
      <ImageBackground style={styles.imageBackgroundup} source={require('./src/assets/sword.png')}>
        <TouchableWithoutFeedback style={styles.up}>
          <Text style={{ fontWeight: 'bold' }}>Sword Art Online</Text>
        <Text style={{fontSize:12 }} >
        2nd Sword Art Online: Progressive Film Earns US$607,000 in U.S.
          </Text>
        </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
      <View style={styles.within}>
      <ImageBackground style={styles.imageBackgroundup} source={require('./src/assets/crunchyroll.png')}>
        <TouchableWithoutFeedback style={styles.up}>
          <Text style={{ fontWeight: 'bold' }}>Crunchyroll</Text>
        <Text style={{fontSize:12 }} >
        Crunchyroll streamed the first episode of Vinland Saga anime's second 
season with Hindi dub on Tuesday and the entire season of SPYxFAMILY 
anime with English dub for free in India.
           </Text>
        </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
      <View style={styles.within}>
      <ImageBackground style={styles.imageBackgroundup} source={require('./src/assets/kuma.png')}>
        <TouchableWithoutFeedback style={styles.up}>
          <Text style={{ fontWeight: 'bold' }}>Kuma Bear Punch!</Text>
        <Text style={{fontSize:10 }} >
        The staff for Kuma Kuma Kuma Bear Punch!, the second anime season based on Kumanano and 029's 
Kuma Kuma Kuma Bear light novels, unveiled the anime's second promotional 
video which previews the opening theme song 
by Azumi Waki, who plays one of the main characters Fina.
           </Text>
        </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
      <View style={styles.within}>
      <ImageBackground style={styles.imageBackgroundup} source={require('./src/assets/animax.png')}>
        <TouchableWithoutFeedback style={styles.up}>
          <Text style={{ fontWeight: 'bold' }}>Animax</Text>
        <Text style={{fontSize:12 }} >
        Reliance's Jio TV began broadcasting the Animax Asia channel in India 
earlier this week. The channel is currently in a testing phase and is 
only available with Japanese audio without subtitles.
           </Text>
        </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
      <View style={styles.within}>
      <ImageBackground style={styles.imageBackgroundup} source={require('./src/assets/genshin.png')}>
        <TouchableWithoutFeedback style={styles.up}>
          <Text style={{ fontWeight: 'bold' }}>Genshin Impact</Text>
        <Text style={{fontSize:12 }} >
        HoYoverse, the Shanghai-based game developer behind “Genshin Impact,” 
announced a partnership with Japanese animation studio Ufotable to 
develop an anime based on the RPG. It also released a three-minute 
“concept trailer” .
           </Text>
        </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
      </ScrollView>

      <View style={styles.within1}>
      
    <TouchableOpacity onPress={ this.nav2} style={{
    marginTop:40,
    marginBottom:20,
    width: 360,
    height: 150,
    alignItems: 'center',}}>
  <ImageBackground 
    source={{uri:'https://cdn.bhdw.net/im/anime-kimi-no-no-wa-wallpaper-54275_w635.webp'}}
    style={{width: '100%', height: '100%', resizeMode: 'cover'}}>
      <TouchableOpacity onPress={ this.nav2} style={{
        backgroundColor: '#F4CD39',
    marginTop:10,
    marginLeft:110,
    borderRadius:20,
    width: 250,
    height: 40,
    alignItems: 'center',}}>
     <Text style={styles.text1}>Visit the anime page for more content</Text>
    
    </TouchableOpacity>
    <Text style={{fontSize:12}} >
    </Text>
  </ImageBackground>
</TouchableOpacity>

<ImageBackground style={{height:'100%' ,width:'100%' ,backgroundColor:'#22282A'}} >
<TouchableWithoutFeedback style={{  backgroundColor: '#F4CD39',
        marginTop:70,
        width: 220,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',}}>
             <Text style={styles.text1}>Fan Rated Manhwa characters</Text>
           </TouchableWithoutFeedback>

        <ScrollView horizontal={true} style={{ flexDirection:'row',
      flex: 1,
      marginTop:10}} >

        <View style={styles.withinStyle1} >
          
          <ImageBackground style={{ width: '100%',
        height: '100%',}} source={require('./src/assets/uap.png')}>
          
          </ImageBackground>
          <TouchableWithoutFeedback style={{ backgroundColor: '#19a89b',
        width: 180,
        height: 90,
        alignItems: 'center',}}>
<Text style={{color:'white',fontSize:12}}>Elisa Willow, president of the Seorn Academy. 
          In the manhwa,she suspects that the protagonist may have infiltrated the academy by swapping with Rudger.
        </Text>
          </TouchableWithoutFeedback>
        </View >
        <View style={styles.withinStyle1}>
          <ImageBackground style={{ width: '100%',
        height: '100%',marginLeft:10}} source={require('./src/assets/sys.png')}>
          </ImageBackground>
          <TouchableWithoutFeedback style={{ backgroundColor: '#19a89b',
        width: 180,
        height: 90,
        alignItems: 'center',marginLeft:10}}>
          <Text style={{color:'white',fontSize:12,marginLeft:2}}>Jin was the youngest son of Runcandel, the land's most prestigious swordsman family
          . He, who came to a meaningless end, was given another chance to redeem himself.</Text>
        </TouchableWithoutFeedback>
        </View >
        <View style={styles.withinStyle1}>
          <ImageBackground style={{ width: '100%',
        height: '100%',marginLeft:20}} source={require('./src/assets/penelope.png')}>
          </ImageBackground>
          <TouchableWithoutFeedback style={{ backgroundColor: '#19a89b',
        width: 180,
        height: 90,
        alignItems: 'center',marginLeft:20}}>
          <Text style={{color:'white',fontSize:12,marginLeft:1}}> Penelope Eckart reincarnated as the of a Duke and the villainess
           of a reverse harem game. The problem is she entered the game at its hardest difficulty, death awaits her at every ending!</Text></TouchableWithoutFeedback>
        </View >
        <View style={styles.withinStyle1}>
          <ImageBackground style={{ width: '100%',
        height: '100%',marginLeft:30}} source={require('./src/assets/greatested.jpg')}>
          
          </ImageBackground>
          <TouchableWithoutFeedback style={{ backgroundColor: '#19a89b',
        width: 180,
        height: 90,
        alignItems: 'center',marginLeft:30}}>
          <Text style={{color:'white',fontSize:12,marginLeft:2}}>After being transported to a novel plot ,using his engineering knowledge
           Suho designs inventions to avert the terrible future that lies in wait for him .</Text>
        </TouchableWithoutFeedback>
        </View >
        <View style={styles.withinStyle1}></View>
      </ScrollView>
      <TouchableWithoutFeedback style={{  backgroundColor: '#F4CD39',
        marginTop:10,
        marginBottom:10,
        width: 220,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',}}>
             <Text style={styles.text1}>Fan Rated Anime characters</Text>
           </TouchableWithoutFeedback>

         <ScrollView horizontal={true} style={{ flexDirection:'row',marginBottom:20}} >

        <View style={styles.withinStyle1} >
          <ImageBackground style={{ width: '100%',
        height: '100%'}} resizeMode='cover' source={require('./src/assets/nezuko.gif')}>
           
          </ImageBackground>
          <TouchableWithoutFeedback style={{ backgroundColor: '#19a89b',
        width: 180,
        height: 90,
        alignItems: 'center'}}><Text style={{color:'white',fontSize:12}}>Megumin is a 14 year-old arch-wizard
        who is part of the Crimson Demons race - humans who possess powerful magic affinity.</Text></TouchableWithoutFeedback>
        </View >
        <View style={styles.withinStyle1}>
          <ImageBackground style={{ width: '100%',
        height: '100%',marginLeft:10}} source={require('./src/assets/luffy.gif')}>
          </ImageBackground>
          <TouchableWithoutFeedback style={{ backgroundColor: '#19a89b',
        width: 180,
        height: 90,
        alignItems: 'center',marginLeft:10}}><Text style={{color:'white',fontSize:12}}>Willing to risk his life to become King of 
        the Pirates ,Luffy embarks on an adventure to find the One-Piece . </Text></TouchableWithoutFeedback>
        </View >
        <View style={styles.withinStyle1}>
          <ImageBackground style={{ width: '100%',
        height: '100%',marginLeft:20}} source={require('./src/assets/anya.gif')}>
          </ImageBackground>
          <TouchableWithoutFeedback style={{ backgroundColor: '#19a89b',
        width: 180,
        height: 90,
        alignItems: 'center',marginLeft:20}}><Text style={{color:'white',fontSize:12}}>Anya has the ability of reading minds and as the
        story goes, gets adopted by Loid Foger who is actually a spy. </Text></TouchableWithoutFeedback>
        </View >
        <View style={styles.withinStyle1}>
          <ImageBackground style={{ width: '100%',
        height: '100%',marginLeft:30}} source={require('./src/assets/komi.gif')}>
          
          </ImageBackground>
          <TouchableWithoutFeedback style={{ backgroundColor: '#19a89b',
        width: 180,
        height: 90,
        alignItems: 'center',marginLeft:30}}>
          <Text style={{color:'white',fontSize:12}}> Komi is adored and popular.  However,
             she has a crippling anxiety and communication disorder which prevents her from socializing.</Text>
        </TouchableWithoutFeedback>
        </View >
        <View style={styles.withinStyle1}></View>
      </ScrollView>
       
        </ImageBackground>
      </View>
      <TouchableWithoutFeedback style={{backgroundColor: '#F4CD39',
        width: 150,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:20,
        marginBottom:5}} >
             <Text style={styles.text1}>Manhwa/Manga</Text>
           </TouchableWithoutFeedback>
      <ScrollView horizontal={true} style={{flexDirection:'row',
    width:360,height:300}} >
        
        <View 
      style={{ flex:1,
      width: 360,
      height: 250,}} >
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Tabs")}>
          <ImageBackground style={{width:'100%',height:'100%',}} source={require('./src/assets/mannn.jpg')}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Tabs")} style={{
        backgroundColor: '#F4CD39',
    marginTop:200,
    marginLeft:170,
    borderRadius:10,
    width: 170,
    height: 40,
    alignItems: 'center',}}>
     <Text style={styles.text1}>Click here for more...</Text>
    
    </TouchableOpacity>
          </ImageBackground>
          </TouchableOpacity>
        </View >
       
      </ScrollView>
      
      </ImageBackground>
      <View style={{height:20,width:360,backgroundColor:"#47BDB0"}}>
      <Text style={{marginLeft:80}}>Copyright © 2023 (Jk...it's not)</Text> 
      </View>
      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  section1:{
   
      width: 360,
      height: 571,
  },
  info:{
    backgroundColor: '#9DF2DD',
    marginTop:117,
    borderRadius: 20,
    width: 370,
    height: 90,
    alignItems: 'center',
  },//
  imageBackgroundup: {
    width: '77%',
    height: '100%',
    },
  up:{
    backgroundColor: '#FADE73',
    borderRadius:7,
    padding: 10,
    marginLeft:210,
    width: '55%',
    height: '100%',
    alignItems: 'center',
  },//
  info1:{
    backgroundColor: '#4AE6D6',
    marginTop:20,
    borderRadius: 20,
    width: 360,
    height: 90,
    alignItems: 'center',
  },
   within:{
    width: 360,
    height: 200,
   },
   within1:{
    width: 360,
    height: 1050,
   },
    container: {
      flex: 1,
      alignItems: 'stretch'
    },
    scroll:{
    flexDirection:'row',
    flex: 1,
    
    },
    scroll1:{
      flexDirection:'row',
      flex: 1,
      marginTop:30
      
      },
    withinStyle:{
      flex:1,
      width: 360,
      height: 200,
      
    },
    withinStyle1:{
      flex:1,
      width: 180,
      height: 200,
    }
    ,
    imageBackground1: {
      width: '100%',
      height: '80%',
      },
      
    imageBackground: {
      width: '100%',
      height: '100%',
      },
      
      to: {
        backgroundColor: '#F4CD39',
        width: 150,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:20,
      },
      to1: {
        backgroundColor: '#F4CD39',
        width: 100,
        height: 70,
        borderRadius: 20,
        alignItems: 'center',
      },
      text1:{
        marginTop:10,
        color: 'black',
      }, 
      closeButton: {
        marginTop:180,
        backgroundColor: '#22282A',
        padding: 10,
        borderRadius: 5,
      },
      closeButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
      },
      
  });