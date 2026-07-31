type Boot = "load" | "No-load" 
type Version = "Premium"| "Standard"
type gameState = "RunningScripts"|"Paused"|"STOP"
type Save = "CloudSave" | "local file"

interface Deck{
    readonly boot : Boot;
    state : gameState;
    readonly version: number;
    save : Save;

}
const Possibillities: Deck[] = [
    {
    boot: "load",
    state: "RunningScripts",
    version: 8.22,
    save: "CloudSave",
    },
     {
    boot: "load",
    state: "RunningScripts",
    version: 8.12,
    save: "CloudSave",
    },
]
interface Player {
    name :  string;
    readonly skill: number;
    callsign?: string;
    readonly assets_in_game: number;
    version: Version;
};
const players: Player[] = [
    {
        name: "sherry",
        skill: 22,
        callsign: "bee",
        assets_in_game: 10000000,
        version: "Premium"
    },
    {
        name: "sonju",
        skill: 15,
        callsign: "geoi",
        assets_in_game: 10000000,
        version: "Premium"
    },
    {
        name: "sinowakalaka",
        skill: 14,
        callsign: "benpow",
        assets_in_game: 100,
        version: "Standard"
    }
];
players.push({
    name: "Boomshakalaka",
    skill: 12,
    callsign: "DAYUM",
    assets_in_game: 13,
    version: "Premium"
});
players.push({
    name: "beeboobaam",
    skill: 21,
    assets_in_game: 10,
    version: "Standard"
});
function showPlayers (players: Player[]): void{
  for(const player of players){
    console.log("   ")
    console.log(`name: ${player.name}`);
    console.log(`skills accquired by the player: ${player.skill}`);
    console.log(`callsign of the ${player.name}  ${player.callsign} `);
    console.log(`assets owned by ${player.name} : ${player.assets_in_game}`);
    console.log( `version owned: ${player.version}`);
  };
};
showPlayers(players);

type ranks = "Gold" | "Silver" | "Bronze"
interface RankedPlayers extends Player{
    rank : ranks
};
const RankedPlayers: RankedPlayers [] = [
    {
        name: "Cherry",
        skill: 25,
        callsign: "bee",
        assets_in_game: 10000000,
        version: "Premium",
        rank: "Gold",
    },
    {
        name: "Mooshie",
        skill: 18,
        callsign: "moosha",
        assets_in_game: 12300,
        version: "Standard",
        rank : "Silver",
},
   {
    name: "mickey",
    skill: 10,
    callsign: "mick",
    assets_in_game: 100,
    version: "Premium",
    rank: "Bronze"
   },
    {
    name: "Wakawaka",
    skill: 20,

    assets_in_game: 100,
    version: "Premium",
    rank: "Bronze"
   },
    {
    name: "Walkie",
    skill: 17,
    
    assets_in_game: 100,
    version: "Premium",
    rank: "Bronze"
   }

]
function displayRanked(RankedPlayers: RankedPlayers[]): void{
   console.log(" ")
   console.log("Ranked Player's Stats: ")
   for(const player of RankedPlayers){
   console.log("   ")
    console.log(`name: ${player.name}`);
    console.log(`skills accquired by the player: ${player.skill}`);
    console.log(`callsign of the ${player.name}  ${player.callsign} `);
    console.log(`assets owned by ${player.name} : ${player.assets_in_game}`);
    console.log( `version owned: ${player.version}`);
    console.log(`${player.name}'s Rank is : ${player.rank}`)
  };
}

displayRanked(RankedPlayers);
function displaynoCallsign(players: Player[],RankedPlayers: RankedPlayers[]): void{
    console.log(" ");
    console.log("Players with no callsign"); 
    for(const player of players){
        if (!player.callsign){
            console.log(" ");
            console.log(player.name)

        }
    }
    for(const player of RankedPlayers){
        if(!player.callsign){
            console.log(" ");
            console.log(player.name)
        }
    }
}
displaynoCallsign(players,RankedPlayers);
function  ShowVersion (players: Player[]): void{
    console.log(" ");
    console.log("Editions owned by players");
    for(const player of players){
        console.log(" ");
        if(player.version === "Premium"){
            console.log(`Premium users are : ${player.name}`)
        
        }
        else{
            console.log(`Standard users are: ${player.name}`)
        }
    }
    for(const player of RankedPlayers){
        console.log(" ");
        if(player.version === "Premium"){
            console.log(`Premium users are : ${player.name}`)
        
        }
        else{
            console.log(`Standard users are: ${player.name}`)
        }
    }  
}
ShowVersion(players);
function updateUser(players: Player[]): void{
  players.splice(2,1);
        players[3].name = "berry";
  for( const player of players){ 
        
        console.log(`${player.name}`);
}
}
updateUser(players);
function Novoid(players: Player[]): number[]{
    return [...players.map(player=>player.skill),...RankedPlayers.map(RankedPlayers => RankedPlayers.skill)];
       
}

console.log(Novoid(players));
const names = (players: Player[])=> players.map(Player=>Player.name)
console.log(" ")

console.log(names(players))
function Uppercase(players: Player[],Rankedplayers: RankedPlayers[]): void{
    for(const player of players){
        if(player.name[0] === player.name[0].toUpperCase()){
            console.log(player.name)
        }
        else{
            player.name = player.name[0].toUpperCase() + player.name.slice(1)
            console.log(player.name)
        }
    }

    for(const player of RankedPlayers){
    if(player.name[0] === player.name[0].toUpperCase()){
            console.log(player.name)
        }
    else{
        player.name = player.name[0].toUpperCase() + player.name.slice(1)
            console.log(player.name)
    }
    }
}
interface billy{
    A : number;
    B: number;
}
Uppercase(players,RankedPlayers)
function ChekcingCallSign(players: Player[],Rankedplayers: RankedPlayers[]): void{
    for(const player of players){
     if ("callsign" in player){
        console.log(player.name,"has callsign",player.callsign)
     }
     else{
        console.log(player.name,"doesnt have a callsign")
     }
    }
     for(const player of Rankedplayers){
     if ("callsign" in player){
        console.log(player.name,"has callsign",player.callsign)
     }
     else{
        console.log(player.name,"doesnt have a callsign")
     }
    }
}
ChekcingCallSign(players,RankedPlayers); 
function Tskills(players: Player[],Rankedplayers: RankedPlayers[]): billy{
    let count_a = 0;
    let count_b = 0;
    for(const player of players){
        count_a = player.skill + count_a
        
    }
      console.log(count_a)
      for (const player of Rankedplayers) {
        count_b += player.skill;
    }
     console.log(count_b)
     

    return{
        A : count_a,
        B: count_b
        };
}
const BUSH = Tskills(players,RankedPlayers);

console.log(BUSH);

interface  num  {
    a : number,
    b: number
}
const numbers : num [] = [
    {
    a : BUSH.A,
    b: BUSH.B,
    },
];

const idk = (numbers : num[],
        operation : (a: number , b: number)=> number): number[] =>{
            return numbers.map(num=> operation(num.a,num.b));

        }
console.log(idk(numbers,(a,b)=>a+b))
console.log(idk(numbers,(a,b)=>a-b))
console.log(idk(numbers,(a,b)=>a*b))
console.log(idk(numbers,(a,b)=>a/b))
console.log(idk(numbers,(a,b)=>a%b))
const calculations = 2;
function idk2(calculations: string|number): void{
  if(typeof calculations === "string"){
    calculations = calculations[0].toUpperCase()+ calculations.slice(1);
    console.log(calculations)
    
  }
  else{
    console.log("its a num")
  }
}
idk2("num");
function EerningTuples(players : Player[]) :readonly [Version,string,number][]{
 
    return players.map(players=>[players.version,players.name, players.skill]);
   
}
const data = EerningTuples(players);
console.log(data);
console.log("FINAL SELECTED PLAYERS ")

function HighSkill(players : Player[],Rankedplayers : RankedPlayers[]) : void{
    let highest = 0;
    let highest2 = 0;
    for(const player of players){
        if(player.skill>highest){
           highest = player.skill

        }
    
    }console.log(highest)
     for(const player of RankedPlayers){
        if(player.skill>highest2){
           highest2 = player.skill

        }
    
    }console.log(highest2)
} HighSkill(players,RankedPlayers)
function AnActualIDK(){
    let eow : any = "hehe";
    let eow2 : unknown = "you arent supossed to come here"
    if(typeof eow2 == "string"){
        console.log("unknown Easter Egg")
    }
    eow = 1275673586293729829028;
    console.log(eow)
}
AnActualIDK();
function crashError(value: never):never{
    throw new Error(`Game Boot failed loading please try running the file again : ${value}`);
    
}
function TestingSmtg(possibillities : Deck[]): void{
         for(const Z of possibillities){
            switch(Z.boot){
                case "load": 
                console.log("File is running Successfully");
            
                break;
                case "No-load": 
                console.log("File is having a trouble loading, will try to load if not so try reloading:")
                break;
                default:
                     crashError(Z.boot);

         }
}
}
TestingSmtg(Possibillities)
console.log("lobby");
type cc = number|undefined|null
type cc2 = string|undefined|null
interface cc3 {
   lobby: cc2,
   lobby_count: cc
}
   
const lobby : cc3[] =  [
    {
      lobby : "HOLAMOLACOKACOLA",
      lobby_count : 22,
    },
    {
        lobby: "loading lobby1",
        lobby_count: 58,

    },
 
 {
    lobby: "loading lobby2",
    lobby_count: 82,
 },
{
    lobby : "loading lobby3",
    lobby_count: null,
},
{
    lobby: undefined,
    lobby_count:98
}
]
function TestingPlayersInlobby(lobby: cc3[]):void{
   for(const count of lobby){
     if (count.lobby === undefined){
        console.log("Error !, loading the lobby now again.......")
    
     }
     else if (count.lobby_count === null){
        console.log("Error showing number of players present ! Try Again pls")
     }
     else{
        console.log(count.lobby,count.lobby_count)
     }

   }
}
TestingPlayersInlobby(lobby);
function Fixinglobby<T extends cc3>(lobby: T[] ): void{
  for(const count of lobby){
    if(count.lobby === undefined){
        console.log(count.lobby = "Fixedlobby")
    }
    else if(count.lobby_count === null){
        console.log("Max Players assigned hence new lobby is created")
        console.log(count.lobby_count = 100)
    }
    else{
    console.log(count.lobby,count.lobby_count)
    }
  }
}
Fixinglobby(lobby);
enum AfterMatch {
    Victory = "Victory",
    defeat = 1,
    spectating = "spectators"
}
function AM(players : Player[],RankedPlayers : RankedPlayers[]) : void{
    let judgement : AfterMatch = AfterMatch.Victory
    let Rankedjudgement : AfterMatch = AfterMatch.spectating
    for(const player of players){

            console.log(player.name,judgement)
        }
    for(const player of RankedPlayers){
        console.log(player.name,Rankedjudgement)
    }
}
AM(players,RankedPlayers)

function FinalizedHighestSkilledPlayers(): void{
    class HighSkill{
        name:string;
        skill: number;
        constructor(name:string, skill: number){
            this.name = name;
            this.skill = skill;
            
        }
        show(){
            console.log(this.name);
            console.log(this.skill);
        }
    }
            const playerRed = new HighSkill("Cherry",25);
           const playerBlue = new HighSkill("Sherry",22);
        playerBlue.show();
        playerRed.show();

}
FinalizedHighestSkilledPlayers();
function AssetHiding(players: Player[]): void{
    class Assetonly {
        constructor(private assettotal: number,readonly Name: string){
        }
       private  show_assettotal(): number{
            return this.assettotal;
        }
        show_assettotal2(): string{
                 return this.Name;
        }
        }
        for(const player of players){
            const assets = new Assetonly(player.assets_in_game,player.name,)
            console.log(assets.show_assettotal2())
            


        }
       
    }
AssetHiding(players)
console.log("Now Weapon Data");
function Weapondata(): void{
    abstract class WeaponSlot1{
        constructor(readonly name : string, private readonly Damage: number){

        }
        abstract attack(): void;
    }
    class M1123 extends WeaponSlot1{
        attack(): void{
            console.log(`weapon name : ${this.name} ,damage is hidden`)

        }
    }
    const weapon1 = new M1123("M1123",80);
    const weapon2 = new M1123("Sacr",200);
    const weapon3 = new M1123("akm",500);
    const weapon4 = new M1123("Bazooka",2000);
    const weapon5 = new M1123("pistol",23);
    const weapon6 = new M1123("mk287383u2",2200);
    weapon1.attack();
    weapon2.attack();
    weapon3.attack();
    weapon4.attack();
    weapon5.attack();
    weapon6.attack();

}
Weapondata();
function Traffic(players : Player[],RankedPlayers : RankedPlayers[]): void{
      
    class server_traffic{
        static member_count = 0;
        constructor(player_count : string){
           server_traffic.member_count ++;
        }
    }

    for(const player of players ){
        const total_mem = new server_traffic(player.name);
       

    }
    for(const player of RankedPlayers){
        const total_mem2 = new server_traffic(player.name);
        
    }
    console.log("Total players in server: ",server_traffic.member_count)
}
Traffic(players,RankedPlayers)
function static_calculator(){
    class uqwjgd1kquhj{
        static add(highest_unrankedskilledplayer: number,highest_rankedskilledplayer: number): number{
          return highest_unrankedskilledplayer +   highest_rankedskilledplayer;            
        }
        
    }
    console.log(uqwjgd1kquhj.add(22,25));


}
static_calculator();
function klsdjslkN(){
    class wpwjexnjno{
        private assets_unlocked = false;
         get unlocked(){
            return this.assets_unlocked;
         }
         set unlocked(value:boolean){
            if (value === true){
                console.log("idk");
            }
         this.assets_unlocked = value;
         }

    }
    const dlwkjedno = new wpwjexnjno();
    dlwkjedno.unlocked = true;
    console.log(dlwkjedno.unlocked);
}
klsdjslkN();
        function mqldkm(players : Player[],updates : Partial<Player>): void{
         Object.assign(players[0],updates);

        }
        mqldkm(players,{skill : 32});
console.log("Updated skill",players[0])
function mqkwn(players: Player[],updates: Readonly<Player>): void{
   Object.assign(players[0],updates);
}
console.log(mqkwn(players,players[0]));
function qklwjdnl(players: Player[], updates: Required<Player>) : void{
    Object.assign(players[3],updates);
}
qklwjdnl(players, {
    name: "huhu",
    skill: 10,
    callsign: "hawk",
    assets_in_game: 100,
    version: "Premium"
});
console.log(players)
function ojdjwnd(players : Player[], updates : Pick<Player,"skill"> ) : void{
    Object.assign(players[1],updates);
    Object.assign(players[2],updates);
    Object.assign(players[3],updates);
    }
    ojdjwnd(players,{skill : 30})
console.log(players)
function qlkwjsn1q(
  RankedPlayers: RankedPlayers[],
  updates: Omit<RankedPlayers, "name" | "callsign" | "assets_in_game" | "version">
): void {
    Object.assign(RankedPlayers[2], updates);
}

qlkwjsn1q(RankedPlayers, {
    skill: 1,
    rank: "Bronze"
});
console.log(RankedPlayers)
function RevealingRankValue() {
    type Ranks = "Gold"| "Silver"| "Bronze"
    const RankPoints : Record<Ranks, number> =
                {
                    "Gold" : 100,
                    "Silver" : 75,
                    "Bronze" : 45
                    }
  
  return RankPoints;
    
}

console.log(RevealingRankValue());
function wej2po(name : string): Player;
function wej2po(skill : number): Player;
function wej2po(value: string | number): Player|undefined{
    if (typeof value === "string"){
        return players.find(Player => Player.name === value)
    }
    return players.find(Player => Player.skill === value )
}
console.log(wej2po("Sherry"));
interface goochiekicchie {
    gege : string;
    gugu : number;

}
type heheName = goochiekicchie["gege"]
type heheNum = goochiekicchie["gugu"]
const intro : heheName = "Hello players hope you are doing well";
const endp : heheNum = 9;
console.log(`${intro} \n Total surviving players were : ${endp} `);
type gucchi = "costly" | "more than costly"
type gucchiBrand = `brand : ${gucchi}`;
let msg : gucchiBrand;
msg = "brand : more than costly";
let msg2 : gucchiBrand;
msg2 = "brand : costly";
console.log(msg2);
console.log(msg);   

type optional = {
        [Key in keyof goochiekicchie]?: goochiekicchie[Key]
};
function ooptional(hehe : optional){
    console.log(hehe)
}
ooptional({
    gege : "hello"
});
interface heh {
    name : string;
    skill : number;
}
const hehyes : heh[] =[
    {
        name:"Sherry",
        skill: 30,
    }
]
type Check<T> = T extends {name : string} ? "YES" : "NO";
type A = Check<heh>;
const result1 : A = "YES";
type B = Check<{ name: number }>;
const result2 : B = "NO"
console.log("The Final Player Who Won The Gane is Sherry !",result1);



