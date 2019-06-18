package kr.hs.dgsw.shopping_back.Controller;

import kr.hs.dgsw.shopping_back.Domain.Attach;
import kr.hs.dgsw.shopping_back.Service.AttachService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URLConnection;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;

@RestController
public class AttachmentController {

    @Autowired
    AttachService attachService;

    @PostMapping("/api/upload/{userId}")
    public HashMap upload(@RequestPart MultipartFile srcFile, @PathVariable Long userId) {
        HashMap<String, Object> map = new HashMap<>();
        try {
            String destFilename
                    = "/Users/dee/Projects/web/web_board/back/upload/"
                    + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS_"))
                    + srcFile.getOriginalFilename();
            File destFile = new File(destFilename);
            destFile.getParentFile().mkdirs();
            srcFile.transferTo(destFile);
            // 아래 빌더 패턴을 사용한 것은 생성자에 파라미터를 바로 넣는 것과 동일하지만 가독성이 좀 더 좋음
            // Attach attach = new Attach(userId, srcFile.getOriginalFilename(), destFilename);
            Attach attach = Attach.builder()
                    .userId(userId)
                    .filename(srcFile.getOriginalFilename())
                    .filepath(destFilename)
                    .build();
            map.put("fileId", attach.getId());
            map.put("filename", srcFile.getOriginalFilename());
            map.put("filepath", destFilename);
        } catch (Exception ex) {
            map.put("fileId", -1L);
            map.put("error", ex.getLocalizedMessage());
        }
        return map;
    }

    @GetMapping("/api/image/{id}")
    public void image(@PathVariable Long id, HttpServletResponse response) {
        try {
            HashMap map = attachService.findById(id);
            String filename = (String)map.get("filename");
            String filepath = (String)map.get("filepath");

            File file = new File(filepath);
            if(! file.exists()) return;

            String mimeType = URLConnection.guessContentTypeFromName(filepath);
            if(mimeType == null) mimeType = "application/octet-stream";

            response.setContentType(mimeType);
            response.setHeader("Content-Disposition", "inline; filename='" + filename + "'");
            response.setContentLength((int)file.length());

            InputStream is = new BufferedInputStream(new FileInputStream(file));
            FileCopyUtils.copy(is, response.getOutputStream());
        } catch (Exception ex) {
            final Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());
            logger.warn(ex.getLocalizedMessage());
        }

    }
}