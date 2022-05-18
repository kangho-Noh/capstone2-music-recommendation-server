package server.music.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import server.music.domain.Song;
import server.music.repository.SongRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SongService {

	private final SongRepository songRepository;

	@Transactional
	public void saveSong(Song song) {
		songRepository.save(song);
	}

}
