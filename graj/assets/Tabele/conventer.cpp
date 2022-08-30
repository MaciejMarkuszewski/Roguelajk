#include <fstream>
#include <iostream>
#include <vector>

using namespace std;

int main(){
    ifstream bronin, czlowiekin, innein, ksiegiin, miksturyin, pancerzin, potionyin, surowcein;
    ofstream bronout, czlowiekout, inneout, ksiegiout, miksturyout, pancerzout, potionyout, surowceout;
    vector<string> bron;
    vector<string> czlowiek;
    vector<string> inne;
    vector<string> ksiegi;
    vector<string> mikstury;
    vector<string> pancerz;
    vector<string> potiony;
    vector<string> surowce;
    string a;
    bronin.open("Bron.csv");
    czlowiekin.open("Czlowiek.csv");
    innein.open("Inne.csv");
    ksiegiin.open("Ksiegi.csv");
    miksturyin.open("Mikstury.csv");
    pancerzin.open("Pancerz.csv");
    potionyin.open("Potiony.csv");
    surowcein.open("Surowce.csv");
    while(!bronin.eof()){
        bronin>>a;
        if(a!=" "){
            bron.push_back(a);
            a=" ";
        }
    }
    while(!czlowiekin.eof()){
        czlowiekin>>a;
        if(a!=" "){
            czlowiek.push_back(a);
            a=" ";
        }
    }
    while(!innein.eof()){
        innein>>a;
        if(a!=" "){
            inne.push_back(a);
            a=" ";
        }
    }
    while(!ksiegiin.eof()){
        ksiegiin>>a;
        if(a!=" "){
            ksiegi.push_back(a);
            a=" ";
        }
    }
    while(!miksturyin.eof()){
        miksturyin>>a;
        if(a!=" "){
            mikstury.push_back(a);
            a=" ";
        };
    }
    while(!pancerzin.eof()){
        pancerzin>>a;
        if(a!=" "){
            pancerz.push_back(a);
            a=" ";
        }
        a=" ";
    }
    while(!potionyin.eof()){
        potionyin>>a;
        if(a!=" "){
            potiony.push_back(a);
            a=" ";
        }
    }
    while(!surowcein.eof()){
        surowcein>>a;
        if(a!=" "){
            surowce.push_back(a);
            a=" ";
        }
    }
    bronout.open("Bron.csv");
    czlowiekout.open("Czlowiek.csv");
    inneout.open("Inne.csv");
    ksiegiout.open("Ksiegi.csv");
    miksturyout.open("Mikstury.csv");
    pancerzout.open("Pancerz.csv");
    potionyout.open("Potiony.csv");
    surowceout.open("Surowce.csv");
    for(int i=0;i<bron.size();i++){
        for(int j=0;j<bron[i].length();j++){
            if(bron[i][j]==';'){
                bron[i][j]=',';
            }
        }
        bronout<<bron[i];
        if(i<bron.size()-1){
            bronout<<endl;
        }
    }
    for(int i=0;i<czlowiek.size();i++){
        for(int j=0;j<czlowiek[i].length();j++){
            if(czlowiek[i][j]==';'){
                czlowiek[i][j]=',';
            }
        }
        czlowiekout<<czlowiek[i];
        if(i<czlowiek.size()-1){
            czlowiekout<<endl;
        }
    }
    for(int i=0;i<inne.size();i++){
        for(int j=0;j<inne[i].length();j++){
            if(inne[i][j]==';'){
                inne[i][j]=',';
            }
        }
        inneout<<inne[i];
        if(i<inne.size()-1){
            inneout<<endl;
        }
    }
    for(int i=0;i<ksiegi.size();i++){
        for(int j=0;j<ksiegi[i].length();j++){
            if(ksiegi[i][j]==';'){
                ksiegi[i][j]=',';
            }
        }
        ksiegiout<<ksiegi[i];
        if(i<ksiegi.size()-1){
            ksiegiout<<endl;
        }
    }
    for(int i=0;i<mikstury.size();i++){
        for(int j=0;j<mikstury[i].length();j++){
            if(mikstury[i][j]==';'){
                mikstury[i][j]=',';
            }
        }
        miksturyout<<mikstury[i];
        if(i<mikstury.size()-1){
            miksturyout<<endl;
        }
    }
    for(int i=0;i<pancerz.size();i++){
        for(int j=0;j<pancerz[i].length();j++){
            if(pancerz[i][j]==';'){
                pancerz[i][j]=',';
            }
        }
        pancerzout<<pancerz[i];
        if(i<pancerz.size()-1){
            pancerzout<<endl;
        }
    }
    for(int i=0;i<potiony.size();i++){
        for(int j=0;j<potiony[i].length();j++){
            if(potiony[i][j]==';'){
                potiony[i][j]=',';
            }
        }
        potionyout<<potiony[i];
        if(i<potiony.size()-1){
            potionyout<<endl;
        }
    }
    for(int i=0;i<surowce.size();i++){
        for(int j=0;j<surowce[i].length();j++){
            if(surowce[i][j]==';'){
                surowce[i][j]=',';
            }
        }
        surowceout<<surowce[i];
        if(i<surowce.size()-1){
            surowceout<<endl;
        }
    }
    bronin.close();
    bronout.close();
    czlowiekin.close();
    czlowiekout.close();
    innein.close();
    inneout.close();
    ksiegiin.close();
    ksiegiout.close();
    miksturyin.close();
    miksturyout.close();
    pancerzin.close();
    pancerzout.close();
    potionyin.close();
    potionyout.close();
    surowcein.close();
    surowceout.close();
    return 0;
}
