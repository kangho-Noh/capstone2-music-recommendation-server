package server.music.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lombok.RequiredArgsConstructor;
import server.music.domain.Member;
import server.music.service.MemberService;

@RestController
@RequiredArgsConstructor
public class MemberController {

	private final MemberService memberService;

	@PostMapping("/members/join")
	@ResponseStatus(HttpStatus.CREATED)
	public MemberDto memberJoin(@RequestBody MemberForm form) {
		Member member = new Member();
		member.setLoginId(form.getLoginId());
		member.setPassword(form.getPassword());

		try {
			Long pkId = memberService.register(member);
			return new MemberDto(pkId, member.getLoginId());
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, "이미 존재하는 아아디");
		}
	}

	@GetMapping("/members")
	public List<MemberDto> memberList() {
		List<Member> memberList = memberService.findMemberList();
		return memberList.stream()
			.map(member -> new MemberDto(member.getId(), member.getLoginId()))
			.collect(Collectors.toList());
	}

	@PostMapping("/login")
	@ResponseStatus(HttpStatus.OK)
	public String login(@RequestBody MemberForm form) {
		Member member = new Member();
		member.setLoginId(form.getLoginId());
		member.setPassword(form.getPassword());

		try {
			memberService.login(member);
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
		}
		return "로그인 완료";
	}
}
