#include <iostream>
#include <fstream>
#include <string>

int main() {
  std::string game;

  std::ifstream gameList ("game-list.csv");

  if(gameList.is_open()) {

    std::cout << "Reading game list..." << "\n\n\n" << std::endl;

    while( getline(gameList,game)) {
      std::cout << game << '\n';
    }

    gameList.close();
  }

  return 0;
}

vector<string> gameData(string data) {

}
