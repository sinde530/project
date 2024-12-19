import 'package:flutter/material.dart';
import 'package:toonflix/models/webtoon_model.dart';
import 'package:toonflix/services/api_service.dart';
import 'package:toonflix/widgets/webtoon_widget.dart';

class HomeScreen extends StatelessWidget {
  // st 입력시, StatelessWidget 자동완성.
  HomeScreen({super.key});

  Future<List<WebtoonModel>> webtoons = ApiService.getTodaysToons();

  @override
  Widget build(BuildContext context) {
    print(webtoons);
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        shape: const Border(
          bottom: BorderSide(
            color: Colors.grey,
            width: 1,
          ),
        ),
        backgroundColor: Colors.white,
        foregroundColor: Colors.green,
        title: const Text(
          "오늘의 웹툰",
          style: TextStyle(
            fontSize: 24,
          ),
        ),
      ),
      body: FutureBuilder(
        future: webtoons,
        builder: (context, snapshot) {
          // 이 코드는 isLoading, state로 데이터 유무 처리 할 필요없음.
          if (snapshot.hasData) {
            return Column(
              children: [
                const SizedBox(
                  height: 50,
                ),
                // Expanded: flex 같은 느낌
                // Expanded(child: makeList(snapshot))
                Expanded(
                  child: Container(
                    child: makeList(snapshot),
                  ),
                ),
              ],
            );
          }
          return const Center(
            child: CircularProgressIndicator(),
          );
        },
      ),
    );
  }

  ListView makeList(AsyncSnapshot<List<WebtoonModel>> snapshot) {
    return ListView.separated(
      // ListView는 메모리 문제가 매우 심하며, ListView.builder 사용을 권장함.
      scrollDirection: Axis.horizontal,
      itemCount: snapshot.data!.length,
      padding: const EdgeInsets.symmetric(vertical: 0, horizontal: 20),
      itemBuilder: (context, index) {
        var webtoon = snapshot.data![index];
        return Webtoon(
          title: webtoon.title,
          thumb: webtoon.thumb,
          id: webtoon.id,
        );
      },
      separatorBuilder: (context, index) => const SizedBox(width: 40),
    );
  }
}
